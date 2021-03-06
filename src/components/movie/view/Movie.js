import React from 'react';
import './Movie.css';
import './Shares.css';
import './Likes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileLink from '../../ProfileLink';
import Collapsible from '../../Collapsible';

const MovieLike = ({ className, movie, action }) => {

	return (
		<div className={`${className} like-box`}>
			<fieldset className="dotted-wrapper">
				<legend className="wrapper-legend">Like</legend>
				<button
					className="like-button button"
					onClick={action}
				>
					<FontAwesomeIcon className="icon" icon="heart" />
					I like this movie too !
			</button>
			</fieldset>
		</div>
	);
};

const Autocomplete = ({ profiles, onChange, userSelected }) => {

	return (
		<label className="share-box-form-user">
			<FontAwesomeIcon className="icon" icon="users" />
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
		return (Boolean(this.state.message) && Boolean(this.state.user));
	}


	render() {
		const { profiles, className } = this.props;
		return (
			<div className={`${className} share-box`}>
				<fieldset className="dotted-wrapper">
					<legend className="wrapper-legend">Share</legend>
					<div className="share-box-form">
						<label className="share-box-form-message">
							<FontAwesomeIcon className="icon" icon="comments" />
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
					</div>
					<button
						onClick={this.submitMessage.bind(this)}
						disabled={!this.validForm()}
						title={!this.validForm() ? "Message and user must be informed to share the movie 😔!" : "Click to share this movie ✅!"}
						className="share-button button"
					>
						<FontAwesomeIcon className="icon share-icon" icon="share-alt" />
						Share Movie
					</button>
				</fieldset>
			</div>
		);
	}
};
class Likes extends React.Component {
	render() {
		const { children, likes = [] } = this.props;
		return (
			<div className="likes">
				<div className="children">
					{children}
				</div>
				<Collapsible description="users who liked this movie">
					<div className="users">
						{likes.map((item, idx) => (
							<ProfileLink key={idx} profile={item.profile} />
						)
						)}

					</div>
				</Collapsible>
			</div>
		);
	}
}
class Shares extends React.Component {

	render() {
		const { children, shares = [] } = this.props;

		return (
			<div className="shares">
				<div className="children">
					{children}
				</div>
				<Collapsible description="messages shared about this movie">
					<div className="messages">
						<table>
							<thead>
								<tr>
									<th>From</th>
									<th>Message</th>
									<th>To</th>
								</tr>
							</thead>
							<tbody>
								{shares.map((item, idx) => (
									<tr key={idx}>
										<td>
											<ProfileLink className="from" profile={item.from} />
										</td>
										<td className="message">
											<blockquote>
												<FontAwesomeIcon className="" icon="quote-left" />
												{item.message}
												<FontAwesomeIcon className="" icon="quote-right" />
											</blockquote>
										</td>
										<td>
											<ProfileLink className="to" profile={item.to} />
										</td>
									</tr>
								)
								)}
							</tbody>
						</table>

					</div>
				</Collapsible>

			</div>
		);
	}
}
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
			<article
				key={movie._id}
				className="movie-article"
			>
				<h2
					className="movie-article-title"
				>
					{movie.title}
				</h2>
				<div
					className="movie-article-content"
				>
					{movie._id ?
						<div>
							<img
								className="movie-article-cover"
								src={`/api/movies/${movie._id}/cover`}
								alt={`This is the ${movie.title} cover`}
							/>
							<div className="movie-counters">
								<div className="movie-counters-shares">
									<FontAwesomeIcon className="icon share-icon" icon="share-alt" />
									{movie.shares ? movie.shares.length : '0'} shares
								</div>
								<div className="movie-counters-likes">
									<FontAwesomeIcon className="icon like-icon" icon="heart" />
									{movie.likes ? movie.likes.length : '0'} likes
								</div>
							</div>
						</div>
						: null
					}

					<p>
						{movie.description}
					</p>
					<div className="action-box">
						<Likes likes={movie.likes}>
							<MovieLike className="box" movie={movie} action={this.likeMovie} />
						</Likes>
					</div>
					<div className="action-box">
						<Shares shares={movie.shares}>
							<MovieShare className="box" movie={movie} action={this.shareMovie} profiles={profiles} />
						</Shares>
					</div>

				</div>

			</article >
		);
	}
	render() {
		return (
			<div>
				{this.renderMovie()}
			</div>

		);
	}
}

export default Movie;
