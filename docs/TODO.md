# TODO for wk-movie-o-rama as React App

+ [X] Make API run
+ [ ] Design the components
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
### If not logged in
A choose the profile screen
### If logged in
 - A *left sidebar* area, where
    - you see the logged user
    - the list of actions to do
    - See all the movies
    - Movies shared with me 
    - Logout action
 - A *main area*, where you'll see the main content
## Views
    - Movies list
    - Movie details
    - Other users profiles


