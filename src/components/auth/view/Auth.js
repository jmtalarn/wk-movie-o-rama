// components/Auth.js
import {
	Link
} from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Auth.css';
export default class Auth extends Component {

	// credentials = {
	// 	username: "Bart.Simpson",
	// 	password: 'movieorama'
	// }
	loginLink = () => (
		<Link
			to="/login"
		>
			<FontAwesomeIcon
				className="nav-menu-icon"
				icon="sign-in-alt"
			/>
			Login
		</Link>
	);
	logoutButton = () => (
		<button
			className="Auth-logout"
			onClick={this.props.logout}
		>
			<FontAwesomeIcon
				className="nav-menu-icon"
				icon="sign-out-alt"
			/>
			Logout
		</button>
	);

	render() {
		const { isAuthenticated } = this.props;
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
