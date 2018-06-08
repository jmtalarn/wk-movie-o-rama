// components/Auth.js
import {
	Link
} from 'react-router-dom';
import React, { Component } from 'react';

export default class Auth extends Component {

	credentials = {
		username: "Bart.Simpson",
		password: 'movieorama'
	}
	loginLink = () => (<Link to="/login">Login</Link>);
	logoutButton = () => (<button className="" onClick={this.props.logout}>Logout</button>);

	render() {
		const {  isAuthenticated } = this.props;
		return (
			<div>
				{!isAuthenticated ? (
					this.loginLink()
				) : (
					this.logoutButton()
					)}
			</div>
		);
	}
}
