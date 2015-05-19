# wk-movie-o-rama

Node.js and Express.js app. Example of a RESTful API with secured methods with token.

##API Methods and URLS

* POST `/auth/login`
It needs also an username and a password in the form. It checks the ULTRA SECRET Password and return a token to execute the secured methods.
* POST `/auth/logout` It removes the stored token to check the user
* GET `/movies` Returns all movies catalog
* GET `/movies/[:id]` Returns a movie
* GET `/profiles` Returns all profiles
* GET `/profiles/[:id]` Return a profile
* POST `/share/movie/[:id]` Share a movie. It needs a message and a destination profile in the post form.
* POST `/like/movie/[:id]` Likes a movie.

##Some Scripts...

* `/node init.mongo.js`
Removes all data from collections and insert basic data
*  `/start.mongo.sh`
Start mongo server and set data path
*  `/start.nodejs.sh`
Start wk-movie-o-rama on a Node.js
* `/test/curl.tests.sh`
Some calls to urls with curl
* `/mocha`
In order to run mocha tests on /test folder like "api.integration.tests.js"
