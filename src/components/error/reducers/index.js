import * as ActionTypes from '../actions/types';


function errorReducer(state = [], action) {
	switch (action.type) {
		case ActionTypes.ERROR:
			return state.concat([ action.error ]);
		default:
			return state;
	}
}

export default errorReducer;
