// components/Auth.js

import React, { Component, PropTypes } from 'react';

export default class Auth extends Component {
	constructor(props) {
		super(props);
	}

	credentials = {
		username: "Bart.Simpson",
		password: 'movieorama'
	}
	loginButton = () => (<button className="" onClick={this.props.login(this.credentials)}>Login</button>);
	logoutButton = () => (<button className="" onClick={this.props.logout}>Logout</button>);

	render() {
		const { login, logout, isAuthenticated, profile } = this.props;
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
