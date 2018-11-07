# What's this?

This application has movies and users profiles.
Each movie only has an ID, a cover image, title and a description. Movies can be liked and
shared and there's also a counter of how many times the movies has been liked, shared and
also who did it.

We also have users profiles and each user has an ID, username and an representative image.
All the users have a profile where you can see the liked and shared movies. When the user
shares a movie with some other user, a notification on its profile appears so the user can check
the shared movie and also a short message (if included).

# Stack used
This application mainly uses
* [Node.js](<https://nodejs.org/>) 
* [Express.js](<https://expressjs.com/>)
* [Mongodb](<https://www.mongodb.com>)
* [Mongoosejs](<https://mongoosejs.com/>)
* [React.js](<https://reactjs.org/>)
* [Redux](<https://redux.js.org/>)

# Run the project

## Run the API

On the project root folder
```bash
node api/server.js
```
This will start both an instance of MongoDB and the API server

## Run the react app

On the project root folder run
```bash
react-scripts start
```
This will start only the React App development server

## Run both at once

### On "production/staging"
On the project root folder
```bash
    npm start
```
This will run with one script both the backend API and the frontend built on the _build_ folder 

### On a development mode
This will enable the hot deploy feature coming with [Create React app](https://www.npmjs.com/package/create-react-app) and will also run the API backend server using the [concurrently](https://www.npmjs.com/package/concurrently) package
```bash
	npm run dev
```

## Environment variables

You can use the following environment variables:

-   `MONGO_PORT` to set the Mongo DB port _default to 27027_
-   `MONGO ADDRESS` the url where the Mongo DB instance is exposed _default to mongodb://localhost_
-   `PORT` the port where the application will run


# Other documents here
* [Implemented API documentation](api/API.md)
* [Once upon a time specifications required](docs/Specs.md)
* [Current state of the pending tasks todo](docs/TODO.md)
* As it is a [Create React app](https://www.npmjs.com/package/create-react-app) script based app here there is the [original generated _Markdown_ readme file](docs/create-react-app.md)
