import React from 'react';
import {
	Link,
	withRouter,
} from 'react-router-dom'
import fakeAuth from './Auth';

const LogoutLink = withRouter(({ history }) => (
	fakeAuth.isAuthenticated ? (

		<Link to="/" onClick={() => {
			fakeAuth.signout(() => history.push('/'))
		}}>Log out</Link>
	) : (
			<Link to="/login" > Login</Link >
		)
))

export default LogoutLink;
