import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';

// import {
// 	Redirect,
// } from 'react-router-dom';

class Profile extends React.Component {
	componentWillMount() {
		this.props.getProfile();
	}

	renderProfile() {
		const {
			profile
		} = this.props;

		return (
			<div>
				{profile.info && profile.info.id ?
					<div className="profile-box">
						<img
							className="profile-avatar"
							alt={`The ${profile.info.username} avatar`}
							src={`/api/profiles/${profile.info.id}/avatar`}
						/>
						<div className="profile-details">
							<h3 className="profile-username">
								{profile.info.username}
							</h3>
							<ul className="profile-actions">
								<li><FontAwesomeIcon icon="share-alt" /> Shared {profile.shares ? profile.shares.length : 0} messages</li>
								<li><FontAwesomeIcon icon="heart" /> Liked {profile.likes ? profile.likes.length : 0} movies</li>
							</ul>
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
