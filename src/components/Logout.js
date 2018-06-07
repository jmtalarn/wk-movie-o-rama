import React from 'react';
import {
	Link,
	withRouter,
} from 'react-router-dom';
import FakeAuth from './FakeAuth';

const LogoutLink = withRouter(({ history }) => (
	FakeAuth.isAuthenticated ? (

		<Link to="/" onClick={() => {
			FakeAuth.signout(() => history.push('/'));
		}}>Log out</Link>
	) : (
			<Link to="/login" > Login</Link >
		)
));

export default LogoutLink;
