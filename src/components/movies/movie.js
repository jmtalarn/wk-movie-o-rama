import React from 'react';
import { MovieContainer } from './container/MoviesContainer';

const Movie = (props) => (
	<MovieContainer id={props.match.params.id} />
);

export default Movie;
