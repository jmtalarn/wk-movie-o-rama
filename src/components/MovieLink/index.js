import React from 'react';
import './index.css';

const MovieLink = ({ movie, className }) => {
	return (movie ?
		<a className={`movie-link ${className || ''}`} href={`/movie/${movie._id}`}>
			<img
				className="movie-cover"
				alt={`The ${movie.title} cover`}
				src={`/api/movies/${movie._id}/cover`}
			/>
		</a> : null
	);
};

export default MovieLink;
