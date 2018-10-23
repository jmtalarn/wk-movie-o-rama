import * as ActionTypes from '../actions/types';

function profileReducer(state = {
	info: {},
}, action) {
	switch (action.type) {
		case ActionTypes.PROFILE_SUCCESS:
			return Object.assign({}, state, {
				info: action.profile,
			});
		default:
			return state;
	}
}

export default profileReducer;
