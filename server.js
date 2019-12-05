// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const superagent = require('superagent');

// Database Client
// (create and connect using DATABASE_URL)
const client = require('./lib/client');
client.connect();
const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');
const authRoutes = createAuthRoutes({
    selectUser(email) {
        return client
            .query(
                `
            SELECT id, email, hash 
            FROM users
            WHERE email = $1;
        `,
                [email]
            )
            .then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        return client
            .query(
                `
            INSERT into users (email, hash)
            VALUES ($1, $2)
            RETURNING id, email;
        `,
                [user.email, hash]
            )
            .then(result => result.rows[0]);
    }
});

// Application Setup
const app = express();
const PORT = process.env.PORT;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', ensureAuth);

// API Routes
app.get('/api/news', async (req, res) => {
    try {
        let rawNews = await superagent.get('https://newsapi.org/v2/top-headlines?language=en&pageSize=100').set(`X-Api-Key`, `${NEWS_API_KEY}`);
        const news = JSON.parse(rawNews.text).articles;

        const titleLookup = news.reduce((acc, curr) => {
            if (!acc[curr.title]) {
                acc[curr.title] = curr;
            }
            return acc;

        }, {});

        const deduplicatedTitles = Object.values(titleLookup);

        res.status(200).json(deduplicatedTitles);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

app.post('/api/favorites', async (req, res) => {
    let user = req.userId;
    let newArticle = req.body;
    try {
        const result = await client.query(`
            INSERT INTO favorites
                (
                user_id,
                source_name,
                author,
                title,
                description,
                link,
                image,
                date,
                content 
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *
        `,
            [user, newArticle.source.name, newArticle.author, newArticle.title, newArticle.description, newArticle.url, newArticle.urlToImage, newArticle.publishedAt, newArticle.content] // these could all be destructures from newArticle
        );
        res.status(200).json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

app.get('/api/favorites', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM   favorites
            WHERE  user_id = $1
        `, [req.userId]);
        res.status(200).json(result.rows);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

app.get('/api/favorites/filter', async (req, res) => {
    try {
        const searchInput = req.query.search;

        const searchInputToUppercase = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);

        const result = await client.query(`
            SELECT *
            FROM   favorites
            WHERE  user_id = $1
            AND title LIKE $2
            OR  user_id = $1
            AND title LIKE $3
            OR  user_id = $1
            AND content LIKE $2 
            OR  user_id = $1
            AND content LIKE $3
        `, [req.userId, `%${searchInputToUppercase}%`, `%${req.query.search}%`]);
        res.status(200).json(result.rows);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

app.delete('/api/favorites/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await client.query(`
            DELETE FROM favorites
            WHERE favorites.id = $1
            RETURNING *
        `, [id]);
        res.status(200).json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

app.get('/api/favorites/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await client.query(`
            SELECT
                favorites.*,
                users.id
            FROM favorites
            JOIN users
            ON favorites.user_id = users.id
            WHERE favorites.id = $1
        `, [id]);
        res.status(200).json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});
// http method and path...


// Start the server
// (use PORT from .env!)

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});