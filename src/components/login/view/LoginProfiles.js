import React from 'react';
import {
	Redirect,
} from 'react-router-dom';
import './LoginProfiles.css';

class LoginProfiles extends React.Component {
	componentWillMount() {
		this.props.getLoginProfiles();
	}
	renderProfiles() {
		const {
			profiles,
			auth,
		} = this.props;

		return (
			<div className="LoginProfiles">
				<h2>Choose a profile to login</h2>
				<ul className="profile-list">
					{profiles.map(profile => (
						<li key={profile.username} className="profile">

							<button
								className="login-button"
								onClick={this.onClickLogin.bind(this, profile)}
							>
								<h3 className="profile-username">{profile.username}</h3>
								<img
									className="profile-avatar"
									src={`/api/profiles/${profile.id}/avatar`}
									alt={`${profile.username} avatar to identify him/her visually`}
								/>
							</button>
						</li>
					))}
				</ul>

			</div>
		);
	}
	onClickLogin(profile) {
		this.props.loginProfile(profile);
	}
	render() {

		return (
			this.props.auth.isAuthenticated ?
				<Redirect to={{
					pathname: '/',
					state: { from: this.props.path }
				}}
				/> :
				this.renderProfiles()
		);
	}
}

export default LoginProfiles;
