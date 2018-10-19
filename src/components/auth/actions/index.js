import * as ACTION from './types';
import { ERROR } from '../../error/actions/types';
import Auth from '../Auth';

// @TODO: Check this https://www.sitepoint.com/redux-authentication-auth0/

//import { CALL_API } from '../middleware/api'

const auth = new Auth();

function loginSuccess(profile) {
	localStorage.setItem('id_token', profile.token);

	localStorage.setItem('id_profile', profile.id);
	return {
		type: ACTION.LOGIN_SUCCESS,
		profile,
	};
}

function loginError(error) {
	localStorage.removeItem('id_token');
	localStorage.removeItem('id_profile');
	return {
		type: ERROR,
		error,
	};
}

export function login(credentials) {

	return dispatch => {
		auth.login(credentials)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					const message = `${response.status} - ${response.statusText}`;
					return response.json()
						.then(json => {
							throw new Error(`${message}: ${json.message}`);
						});
				}
			})
			.then(json => dispatch(loginSuccess(json)))
			.catch(error => { console.log(error); return dispatch(loginError(error)); });
	};
}


function logoutSuccess(profile) {
	localStorage.removeItem('id_token');
	localStorage.removeItem('id_profile');
	return {
		type: ACTION.LOGOUT_SUCCESS
	};
}

export function logout() {
	return dispatch => {
		return dispatch(logoutSuccess());
	};
}
