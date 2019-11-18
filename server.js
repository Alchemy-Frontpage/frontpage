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

// Application Setup
const app = express();
const PORT = process.env.PORT;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());


// API Routes
app.get('/api/news', async (req, res) => {
    try {
        let news = await superagent.get('https://newsapi.org/v2/top-headlines?language=en').set(`X-Api-Key`, `${NEWS_API_KEY}`);
        let newsObj = JSON.parse(news.text);
        res.status(200).json(newsObj.articles);
    }
    catch (err){
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