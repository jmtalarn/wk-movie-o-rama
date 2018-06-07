# TODO for wk-movie-o-rama as React App

+ [X] Make API run
+ [X] Design the components
+ [ ] Think about components containers
+ [ ] Auth in React
+ [ ] Combine React router and Auth
+ [ ] Combine React router, Auth and Redux


# Run the project
## Run the API
On the project root folder
    node api/server.js
This will start both an instance of MongoDB and the API server
## Run the react app
On the project root folder 
    react-scripts start
This will start only the React App development server
## Run both at once
On the project root folder
    npm start
This will run _concurrently_ the two scripts above


# Design components
## For the whole app
 - A *left sidebar* area, where
    - you see the logged user if logged in
    - the list of actions to do
    - See all the movies
    - Movies shared with me if logged in
    - Logout link if logged in / Login link if not logged in
 - A *main area*, where you'll see the main content
 
## Views
- Movies list
- Movie details
- Other users profiles
## Actions
- Login
- Logout
- See Movies List
- See Movie details
- See movies shared with me
- See user profiles
- Like a movie
- Share a movie

# Think about components containers
- [X] We need to create the Main container and the routes to show each of the views
- [X] We should protect the routes and actions
- [ ] Start to use Redux to manage the authenticated user state
 



