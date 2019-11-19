// load connection string from .env
require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// **note:** you will need to create the database!

// async/await needs to run in a function
run();

async function run() {
    // make a new pg client to the supplied url
    const client = new Client(process.env.DATABASE_URL);

    try {
        // initiate connecting to db
        await client.connect();
    
        // run a query to create tables
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY NOT NULL,
                email VARCHAR(256) NOT NULL,
                hash VARCHAR(512) NOT NULL
            );

            CREATE TABLE favorites (
                id SERIAL PRIMARY KEY NOT NULL,
                user_id INTEGER NOT NULL REFERENCES users(id),
                source_name VARCHAR(256) NOT NULL,
                author VARCHAR(256) NOT NULL,
                title VARCHAR(512) NOT NULL,
                description VARCHAR(512),
                link VARCHAR(999) NOT NULL,
                image VARCHAR(999) NOT NULL,
                date VARCHAR(256) NOT NULL,
                content VARCHAR(512) NOT NULL
            );
        `);

        console.log('create tables complete');
    }
    catch (err) {
        // problem? let's see the error...
        console.log(err);
    }
    finally {
        // success or failure, need to close the db connection
        client.end();
    }
    
}