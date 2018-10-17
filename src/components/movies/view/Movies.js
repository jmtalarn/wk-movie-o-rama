import React from 'react';
import './Movies.css';
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
				<article className="movie" key={movie._id}>
					<img
						className="movie-cover"
						src={`api/movies/${movie._id}/cover`}
						alt={`This is the ${movie.title} cover`}
					/>
					<h3 className="movie-title">
						<a href={`/movie/${movie._id}`}>{movie.title}</a>
					</h3>
					<p className="movie-description">{movie.description}</p>
				</article>
			)
			)
		);
	}
	render() {
		return (
			<div>
				<h2>Movies page</h2>
				<div className="movie-gallery">
					{this.renderMovies()}
				</div>
			</div>

		);
	}
}

export default Movies;
