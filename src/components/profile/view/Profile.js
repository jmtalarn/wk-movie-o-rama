import React from 'react';
import {
	Redirect,
} from 'react-router-dom';

class Profile extends React.Component {
	componentWillMount(){
		this.props.getProfile();
	}

	renderProfile(){
		const {
			profile
		} = this.props;
		console.log({profile});
		return(
			profile?
				<p>
					{profile.info.username}
					<img src={`api/profiles/${profile.info._id}/avatar`} />
					{profile.info.likes}
					{profile.info.shares}
					{profile.info.images}
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
