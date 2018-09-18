import * as ActionTypes from '../actions/types';

function moviesReducer(state = {
	data: [],
	error: ''
}, action) {
	switch (action.type) {
		case ActionTypes.MOVIES_SUCCESS:
			return Object.assign({}, state, {
				data: action.movies,
				error: ''
			});
		case ActionTypes.MOVIES_ERROR:
			return Object.assign({}, state, {
				data: [],
				error: action.error
			});
		default:
			return state;
	}
}

export default moviesReducer;
