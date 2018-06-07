import * as ACTION from './action-types';
import Auth  from '../../components/Auth';

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

export function login() {
	const lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
	return dispatch => {
		lock.show((err, profile, token) => {
			if (err) {
				return dispatch(loginError(err));
			}
			localStorage.setItem('profile', JSON.stringify(profile));
			localStorage.setItem('id_token', token);
			return dispatch(loginSuccess(profile));
		});
	};
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function logoutSuccess(profile) {
	return {
		type: LOGOUT_SUCCESS
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		return dispatch(logoutSuccess());
	};
}
