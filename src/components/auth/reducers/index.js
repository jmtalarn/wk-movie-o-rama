import * as ActionTypes from '../actions/types';
const jwtDecode = require('jwt-decode');

function checkTokenExpiry() {
	let jwt = localStorage.getItem('id_token');
	if (jwt) {
		let jwtExp = jwtDecode(jwt).exp;
		let expiryDate = new Date(0);
		expiryDate.setUTCSeconds(jwtExp);

		if (new Date() < expiryDate) {
			return true;
		}
	}
	return false;
}

function getProfile() {
	return JSON.parse(localStorage.getItem('profile'));
}

function authReducer(state = {
	isAuthenticated: checkTokenExpiry(),
	profile: getProfile(),
}, action) {
	switch (action.type) {
		case ActionTypes.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isAuthenticated: true,
				profile: action.profile,
			});
		case ActionTypes.LOGOUT_SUCCESS:
			return Object.assign({}, state, {
				isAuthenticated: false,
				profile: null
			});
		default:
			return state;
	}
}

export default authReducer;
