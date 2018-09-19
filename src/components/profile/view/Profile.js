import React from 'react';
// import {
// 	Redirect,
// } from 'react-router-dom';

class Profile extends React.Component {
	componentWillMount(){
		this.props.getProfile();
	}

	renderProfile(){
		const {
			profile
		} = this.props;
		return(
			profile?
				<p>
					{profile.info.username}
					<img
						alt={`The ${profile.info.username} avatar`}
						src={`/api/profiles/${profile.info.id}/avatar`}
					/>
				</p>:
				null
		);
	}
	render() {
		return (
			<div>
				<h1>Profile page</h1>
				{this.renderProfile()}
			</div>

		);
	}
}

export default Profile;
