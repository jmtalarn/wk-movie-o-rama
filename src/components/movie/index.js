import React from 'react';
import MovieContainer from './container/MovieContainer.js';

const Movie = (props) => (
	<MovieContainer id={props.match.params.id} />
);

export default Movie;
