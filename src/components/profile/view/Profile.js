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
		return(
			profile?
				<p>
					{profile.info.username}
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
