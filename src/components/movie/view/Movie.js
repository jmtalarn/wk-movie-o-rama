import React from 'react';

const MovieLike = ({ movie, action }) => {

	return (
		<React.Fragment>
			<p>{movie.likes ? movie.likes.length : '0'} likes </p>
			<button onClick={action}> Like Movie </button>
		</React.Fragment>
	);
};

const Autocomplete = ({ profiles, onChange, userSelected }) => {

	return (
		<label>
			To user
			<input list="profiles" onInput={onChange} />
			<datalist id="profiles">
				{
					profiles.map((profile) =>
						(
							<option
								key={profile.id}
								value={profile.username}
								data-user={profile._id}
							/>

						)
					)
				}
			</datalist>
			{Boolean(userSelected) ? <span className="selected">✓</span> : null}
		</label>
	);
};

class MovieShare extends React.Component {

	constructor(props) {
		super(props);
		this.state = { message: '', user: null };
		this.validForm = this.validForm.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}

	updateMessage(event) {
		const message = event.target.value;

		this.setState(Object.assign({}, this.state, { message }));
	}
	submitMessage(event) {
		const { action } = this.props;
		event.preventDefault();
		action(this.state);
		console.log('submitted message', this.state);
		this.setState({ message: '', user: null });
	}
	updateUser(event) {
		event.preventDefault();
		const userSelected = this.props.profiles.find(profile => profile.username === event.target.value);
		const user = userSelected ? userSelected.id : null;

		this.setState(
			Object.assign(
				{},
				this.state,
				{
					user
				}
			)
		);
	}
	validForm() {
		console.log('validForm', Boolean(this.state.message) && Boolean(this.state.user));

		return (Boolean(this.state.message) && Boolean(this.state.user));
	}


	render() {
		const { movie, profiles } = this.props;
		return (
			<React.Fragment>
				<p>{movie.shares ? movie.shares.length : '0'} shares </p>
				<label>
					Message
					<input
						type="text"
						onChange={this.updateMessage.bind(this)}
						value={this.state.message}
					/>
				</label>
				<Autocomplete
					profiles={profiles}
					onChange={this.updateUser.bind(this)}
					userSelected={Boolean(this.state.user)}
				/>
				<button onClick={this.submitMessage.bind(this)} disabled={!this.validForm()}> Share Movie </button>
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
	shareMovie({ message, user }) {
		const { id } = this.props;
		this.props.shareMovie(id, message, user);
	}
	renderMovie() {
		const { movie: { data: movie }, profiles } = this.props;

		return (
			<article key={movie._id}>
				{movie._id ? <img
					src={`/api/movies/${movie._id}/cover`}
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
