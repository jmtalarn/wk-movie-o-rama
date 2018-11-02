import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Collapsible from '../../Collapsible';
import MovieLink from '../../MovieLink';
import ProfileLink from '../../ProfileLink';

import './Profile.css';
import './Likes.css';
import './Shares.css';


class Likes extends React.Component {
	render() {
		const { children, likes = [], } = this.props;
		return (
			<div className="likes">
				<h4>
					<FontAwesomeIcon icon="heart" /> Liked {likes ? likes.length : 0} movies
				</h4>
				<Collapsible description="movies liked by this user">
					<div className="movies">
						{likes.map((item, idx) =>
							(
								<MovieLink key={idx} movie={item.movie} />
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
				<h4>
					<FontAwesomeIcon icon="share-alt" /> Shared {shares ? shares.length : 0} messages
				</h4>

				<Collapsible description="messages shared by this user">
					<div className="messages">
						<table>
							<thead>
								<tr>
									<th>Movie</th>
									<th>Message</th>
									<th>To</th>
								</tr>
							</thead>
							<tbody>
								{shares.map((item, idx) => (
									<tr key={idx} >
										<td>
											<MovieLink className="movie" movie={item.movie} />
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

class Profile extends React.Component {
	componentWillMount() {
		this.props.getProfile(this.props.id || null);
	}

	renderProfile() {
		const {
			profile: { info: profile }
		} = this.props;
		console.log(profile);
		return (
			<div>
				{profile && profile.id ?
					<div className="profile-box">
						<img
							className="profile-avatar"
							alt={`The ${profile.username} avatar`}
							src={`/api/profiles/${profile.id}/avatar`}
						/>
						<div className="profile-details">
							<h3 className="profile-username">
								{profile.username}
							</h3>
							<div className="profile-actions">
								<Shares shares={profile.shares} />
								<Likes likes={profile.likes} />
							</div>
						</div>
					</div> :
					null
				}
			</div>

		);
	}
	render() {

		return (
			<div className="profile-view">
				<h2>Profile page</h2>
				{this.renderProfile()}
			</div>

		);
	}
}

export default Profile;
