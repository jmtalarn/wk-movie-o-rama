import * as ACTION from './action-types';

// @TODO: Check this https://www.sitepoint.com/redux-authentication-auth0/

export const login = (auth) => ({
	type: ACTION.LOGIN,
	auth,
});
export const logout = () => ({
	type: ACTION.LOGOUT,
	auth: {},
});
