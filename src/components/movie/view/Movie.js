import React from 'react';
// import {
// 	Redirect,
// } from 'react-router-dom';
const MovieLike = ({ movie, action }) => {

	return (
		<React.Fragment>
			<p>{movie.likes ? movie.likes.length : '0'} likes </p>
			<button onClick={action}> Like Movie </button>
		</React.Fragment>
	);
};

const Autocomplete = ({ profiles, onChange }) => {

	return (
		<label>
			To user
			<input list="profiles" onInput={onChange} />
			<datalist id="profiles">
				{profiles.map((profile) => (
					<option
						key={profile.id}
						value={profile.username}
					>
						{profile.id}
					</option>)
				)}
			</datalist>
		</label>
	);
};

class MovieShare extends React.Component {


	constructor(props) {
		super(props);
		this.state = { message: '' };
	}
	updateMessage(event) {
		const message = event.target.value;
		this.setState({ message });
	}
	submitMessage(event) {
		const { action } = this.props;
		event.preventDefault();
		action(this.state);
	}
	updateUser(event) {
		event.preventDefault();
		console.log({ event.target.value });
	}


	render() {
		const { movie, profiles } = this.props;
		return (
			<React.Fragment>
				<p>{movie.shares ? movie.shares.length : '0'} shares </p>
				<label>
					Message
					<input type="text" onChange={this.updateMessage.bind(this)}></input>
				</label>
				<Autocomplete profiles={profiles} onChange={this.updateUser} />
				<button onClick={this.submitMessage.bind(this)}> Share Movie </button>
			</React.Fragment>
		);
	}
};

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.likeMovie = this.likeMovie.bind(this);
		this.shareMovie = this.shareMovie.bind(this);
	}
	componentWillMount() {
		const { id } = this.props;
		this.props.getMovie(id);
	}
	likeMovie() {
		const { id } = this.props;
		this.props.likeMovie(id);
	}
	shareMovie(message, user) {
		const { id } = this.props;
		this.props.shareMovie(id, message, user);
	}
	renderMovie() {
		const { movie: { data: movie }, profiles } = this.props;

		return (
			<article key={movie.id}>
				{movie.id ? <img
					src={`/api/movies/${movie.id}/cover`}
					alt={`This is the ${movie.title} cover`}
				/> : null}
				<h3>{movie.title}</h3>
				<p>{movie.description}</p>
				<MovieLike movie={movie} action={this.likeMovie} />
				<MovieShare movie={movie} action={this.shareMovie} profiles={profiles} />
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
