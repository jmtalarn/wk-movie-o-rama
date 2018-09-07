import * as ActionTypes from '../actions/types';

function profileReducer(state = {
	info: {},
	error: ''
}, action) {
	switch (action.type) {
		case ActionTypes.PROFILE_SUCCESS:
			return Object.assign({}, state, {
				info: action.profile,
				error: ''
			});
		case ActionTypes.PROFILE_ERROR:
			return Object.assign({}, state, {
				info: {},
				error: action.error
			});
		default:
			return state;
	}
}

export default profileReducer;
