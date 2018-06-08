// components/Auth.js

import React, { Component } from 'react';

export default class Auth extends Component {

	credentials = {
		username: "Bart.Simpson",
		password: 'movieorama'
	}
	loginButton = () => (<button className="" onClick={this.props.login(this.credentials)}>Login</button>);
	logoutButton = () => (<button className="" onClick={this.props.logout}>Logout</button>);

	render() {
		const {  isAuthenticated } = this.props;
		return (
			<div>
				{!isAuthenticated ? (
					this.loginButton()
				) : (
					this.logoutButton()
					)}
			</div>
		);
	}
}
