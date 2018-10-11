import React from 'react';
// import {
// 	Redirect,
// } from 'react-router-dom';

class Movies extends React.Component {
	componentWillMount() {
		this.props.getMovies();
	}

	renderMovies() {
		const {
			movies
		} = this.props;

		return (
			movies.data.map((movie) => (
				<article key={movie._id}>
					<img
						src={`api/movies/${movie._id}/cover`}
						alt={`This is the ${movie.title} cover`}
						style={
							{
								width: '2rem',
								height: '3.5rem'
							}
						}
					/>
					<h3><a href={`/movie/${movie._id}`}>{movie.title}</a></h3>
					<p>{movie.description}</p>
				</article>
			)
			)
		);
	}
	render() {
		return (
			<div>
				<h1>Movies page</h1>
				{this.renderMovies()}
			</div>

		);
	}
}

export default Movies;
