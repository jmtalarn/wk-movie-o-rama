import * as ActionTypes from '../actions/types';

function loginReducer(state = {
	profiles: [],
	error: ''
}, action) {
	switch (action.type) {
		case ActionTypes.LOGIN_PROFILES_RECEIVED:
			return Object.assign({}, state, {
				profiles: action.profiles,
				error: ''
			});
		case ActionTypes.LOGIN_PROFILES_ERROR:
			return Object.assign({}, state, {
				profiles: [],
				error: action.error
			});
		default:
			return state;
	}
}

export default loginReducer;
