import * as ActionTypes from '../actions/types';

function loginReducer(state = {
	profiles: [],
}, action) {
	switch (action.type) {
		case ActionTypes.LOGIN_PROFILES_RECEIVED:
			return Object.assign({}, state, {
				profiles: action.profiles,
			});
		default:
			return state;
	}
}

export default loginReducer;
