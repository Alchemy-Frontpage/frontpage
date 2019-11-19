# Frontpage

Team Members: Jacob Harrington, Ben Beekman, Jasmin Moneymaker, Eve Stickstill, Ian Andrewson

Frontpage is a news aggregating app with a Tinder-esque interface. Eventually, relations between articles will be mapped, allowing a user to easily stay up to date on a developing story and see what events led up to a current article.

V1.0.0 - News aggregation, with the ability to save a story to a list for later reading.

This app uses Node, Express, Morgan, PostGres, jsonwebtoken, bcryptjs, cors, dotenv, superagent, and swiped-events.

To load dependencies for further development: npm i

Endpoints:
    .get/api/news: fetches news stories from news-api. Example response:
    ```
    {
    "status": "ok",
    "totalResults": 4320,
    -
    "articles": [
        -
        {
            -
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Laura Mallonee",
            "title": "Inside the Icelandic Facility Where Bitcoin Is Mined",
            "description": "Cryptocurrency mining now uses more of the Nordic island nation's electricity than its homes.",
            "url": "https://www.wired.com/story/iceland-bitcoin-mining-gallery/",
            "urlToImage": "https://media.wired.com/photos/5dbc37a4c955950008b26751/191:100/w_1280,c_limit/photo_barnard_explosions_4.jpg",
            "publishedAt": "2019-11-03T15:00:00Z",
            "content": "Less than two miles from Icelands Reykjavik airport sits a nondescript metal building as monolithic and drab as a commercial poultry barn. Theres a deafening racket inside, too, but it doesnt come from clucking chickens. Instead, tens of thousands of whirring… [+3426 chars]"
        },
        {
            -
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Satoshi Nakaboto",
            "title": "Satoshi Nakaboto: ‘Chinese congress passes ‘crypto law’ after president’s endorsement of blockchain’",
            "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Baudriallard used to say: There’s only one…",
            "url": "https://thenextweb.com/hardfork/2019/10/27/satoshi-nakaboto-chinese-congress-passes-crypto-law-after-presidents-endorsement-of-blockchain/",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
            "publishedAt": "2019-10-27T10:27:41Z",
            "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Baudriallard used to say: Theres only one … [+3093 chars]"
        }, ...ETC
    ]
    ```
    .post/api/favorites: adds an article to the favorites table. No response.
    .get/api/favorites: returns list of favorited/saved articles. Same shape as get/api/news
    .delete/api/favorites/:id: removes a favorite from the favorite table
    .get/api/favorites:id: fetches a single article from the favorites table, typically used for displaying all details of an article.

Tables:
    users: serialized ID, e.m.a.i.l., hash
    favorites: serialized ID, user_id, source_name, author, title, description (allows null value), link, image, date, content.
