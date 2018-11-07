# The Situation
Our application has movies and users profiles.
Each movie only has an ID, a cover image, title and a description. Movies can be liked and
shared and there's also a counter of how many times the movies has been liked, shared and
also who did it.

We also have users profiles and each user has an ID, username and an representative image.
All the users have a profile where you can see the liked and shared movies. When the user
shares a movie with some other user, a notification on its profile appears so the user can check
the shared movie and also a short message (if included).

## Define and implement using Node.js:
As a user I can:
- [X] See a list of movies showing their cover image
- [X] See a detailed page of a movie
- [X] Like a movie
- [X] Share a movie with some other user including a message
- [ ] Recieve a movie via sharing with a message written from another user
- [X] A user can visit any other user's profile
- [X] Login with (at least) 2 different users to see the shared movies
	- [X] Login with (at least) 2 different users
	- [X] to see the sared movies

## Extra Balls (any of them are mandatory):
- [ ] In a movie detail page you can also view a list with another movies liked from another
users that already liked the movie where you are
- [ ] Implement WebSockets to receive notifications in real-time

## Notes:
- [X] The web app should retrieve all the data from an API
- [X] Implement the app following the REST principles
- [X] Use any module or library that you need
- [ ] Implement the tests that you consider it appropriate
- [ ] Implement a caching mechanism when you consider it appropriate
- [X] Suppose that the users are already registered
- [X] Use a NoSQL database to persist the data
