import * as ActionTypes from '../actions/types';

function moviesReducer(state = {
	data: [],
}, action) {
	switch (action.type) {
		case ActionTypes.MOVIES_SUCCESS:
			return Object.assign({}, state, {
				data: action.movies,
			});
		default:
			return state;
	}
}

export default moviesReducer;
