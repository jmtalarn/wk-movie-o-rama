# TODO for wk-movie-o-rama as React App

+ [X] Make API run
+ [X] Design the components
+ [X] Think about components containers
+ [X] Auth in React
+ [X] Combine React router and Auth
+ [X] Combine React router, Auth and Redux


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
## Environment variables
You can use the following environment variables:
* `MONGO_PORT` to set the Mongo DB port *default to 27027*
* `MONGO ADDRESS` the url where the Mongo DB instance is exposed *default to mongodb://localhost*
* `PORT` the port where the application will run
  
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
- [X] Start to use Redux to manage the authenticated user state
- [X] Create the containers component to bind the state provided by redux with the view components 
- [X] Implement the login view component
	- [X] Get the available profiles ...
	- [X] and its images to show the login page
	- [X] Create an async action
	- [X] Create the reducer
	- [X] Add the login action per profile

- [X] Implement actions and views for the specifications
- [X] Manage errors with state
- [X] Display errors properly
- [X] Other profile view
	- [X] Select profile to view
	- [X] View other profile
- [X] See shared messages 
	- [X] by user
	    - [X] get data
    	- [X] show it
	- [ ] to user
		- [ ] get data
		- [ ] show it
	- [X] for a movie
		- [X] get data
		- [X] show it
- [X] See likes 
	- [X] of a user
        - [X] get data
    	- [X] show it
	- [X] on a movie
        - [X] get data
    	- [X] show it

- [ ] Receiving notifications
	- [ ] Implement notification system

# Styling app
- [X] Styling app
	- [X] Layout
	- [X] Navigation
		- [X] Content
		- [X] Icons
	- [X] Login profiles
	- [X] Movies gallery
	- [X] Movie
		- [X] Movie details
		- [X] Like a movie
		- [X] Share a movie
	- [X] Profile
	- [X] Any new thing there 


