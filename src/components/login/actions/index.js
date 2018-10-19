import * as ACTION from './types';
import { ERROR } from '../../error/actions/types';

const API_URL = '/api/profiles';

export function getLoginProfiles() {

	return dispatch => {
		fetch(API_URL)
			.then(response => response.json())
			.then(json => dispatch(loginProfilesReceived(json)))
			.catch(error => { console.log(error); return dispatch(loginProfilesError(error)); });
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
		type: ERROR,
		error,
	};
}



