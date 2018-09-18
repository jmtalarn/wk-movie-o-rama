import React from 'react';
// import {
// 	Redirect,
// } from 'react-router-dom';

class Movie extends React.Component {
	componentWillMount(){
		const { id } = this.props;
		this.props.getMovie(id);
	}

	renderMovie(){
		const movie = this.props.movie.data;

		return(
			<article key={movie.id}>
				<img
					src={`/api/movies/${movie.id}/cover`}
					alt={`This is the ${movie.title} cover`}
				/>
				<h3>{movie.title}</h3>
				<p>{movie.description}</p>
			</article>
		);
	}
	render() {
		return (
			<div>
				<h1>Movie page</h1>
				{this.renderMovie()}
			</div>

		);
	}
}

export default Movie;
