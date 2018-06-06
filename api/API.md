## API Methods and URLS

-   POST `/api/auth/login`
    It needs also an username and a password in the form. It checks the ULTRA SECRET Password and return a token to execute the secured methods.
-   POST `/api/auth/logout` It removes the stored token to check the user
-   GET `/api/auth/check` Check if the user is logged and return the profile with the token
-   GET `/api/movies` Returns all movies catalog
-   GET `/api/movies/[:id]` Returns a movie
-   GET `/api/profiles` Returns all profiles
-   GET `/api/profiles/[:id]` Return a profile
-   POST `/api/share/movie/[:id]` Share a movie. It needs a message and a destination profile in the post form.
-   POST `/api/like/movie/[:id]` Likes a movie.
