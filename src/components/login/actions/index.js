import * as ACTION from './types';
import Auth  from '../Auth';

// @TODO: Check this https://www.sitepoint.com/redux-authentication-auth0/

//import { CALL_API } from '../middleware/api'

const auth = new Auth();

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

const API_URL = '/api/profiles';

export function getLoginProfiles() {

	return dispatch=> {
		fetch(API_URL)
		.then(response => response.json())
		.then(json => dispatch(loginProfilesReceived(json)))
		.catch(error => dispatch(loginProfilesError(error)));
	};
}

export function loginProfilesReceived(profiles) {
	return {
		type: ACTION.LOGIN_PROFILES_RECEIVED,
		profiles,
	};
}

export function loginProfilesError(error) {
	return {
		type: ACTION.LOGIN_PROFILES_ERROR,
		error,
	};
}



