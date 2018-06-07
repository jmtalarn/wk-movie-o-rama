import * as ACTION from './types';
import Auth  from '../Auth';

// @TODO: Check this https://www.sitepoint.com/redux-authentication-auth0/

//import { CALL_API } from '../middleware/api'



function loginSuccess(profile) {
	return {
		type: ACTION.LOGIN_SUCCESS,
		profile,
	};
}

function loginError(err) {
	return {
		type: ACTION.LOGIN_ERROR,
		err,
	};
}

export function login(credentials) {

	return dispatch=> {
		Auth.login(credentials)
		.then(response => response.json())
		.then(json => dispatch(loginSuccess(json)))
		.catch(error => dispatch(loginError(error)));
	};
}


function logoutSuccess(profile) {
	return {
		type: ACTION.LOGOUT_SUCCESS
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		return dispatch(logoutSuccess());
	};
}
