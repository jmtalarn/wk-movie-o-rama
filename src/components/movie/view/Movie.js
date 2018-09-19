import React from 'react';
// import {
// 	Redirect,
// } from 'react-router-dom';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.likeMovie= this.likeMovie.bind(this);
	}
	componentWillMount(){
		const { id } = this.props;
		this.props.getMovie(id);
	}
	likeMovie(){
		const { id } = this.props;
		this.props.likeMovie(id);
	}
	renderMovie(){
		const movie = this.props.movie.data;

		return(
			<article key={movie.id}>
				{movie.id?<img
					src={`/api/movies/${movie.id}/cover`}
					alt={`This is the ${movie.title} cover`}
				/>:null}
				<h3>{movie.title}</h3>
				<p>{movie.description}</p>
				<p>{movie.likes?movie.likes.length:'0'} likes </p>
				<button onClick={this.likeMovie}> Like Movie </button>
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
