import React from 'react';
import {
	Redirect,
} from 'react-router-dom';

class Profile extends React.Component {
	render() {
		const {
			profile
		} = this.props;
		console.log({profile});
		return (
			<h1>Profile page</h1>
		);
	}
}

export default Profile;
