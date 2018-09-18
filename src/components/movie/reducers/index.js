import * as ActionTypes from '../actions/types';

function movieReducer(state = {
	data: {},
	error: ''
}, action) {
	console.log("movieReducer", action);
	switch (action.type) {
		case ActionTypes.MOVIE_SUCCESS:
			return Object.assign({}, state, {
				data: action.movies,
				error: ''
			});
		case ActionTypes.MOVIE_ERROR:
			return Object.assign({}, state, {
				data: {},
				error: action.error
			});
		default:
			return state;
	}
}

export default movieReducer;
