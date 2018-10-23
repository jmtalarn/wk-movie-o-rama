import * as ActionTypes from '../actions/types';

function movieReducer(state = {
	data: {},
}, action) {
	switch (action.type) {
		case ActionTypes.MOVIE_SUCCESS:
			return Object.assign({}, state, {
				data: action.movies,
			});
		default:
			return state;
	}
}

export default movieReducer;
