import * as ActionTypes from '../actions/types';


function errorReducer(state = [], action) {
	switch (action.type) {
		case ActionTypes.ERROR:
			return state.concat([ action.error ]);
		case ActionTypes.DISMISS_ERROR:
			return state.slice(0, action.errorIndex).concat(state.slice(action.errorIndex + 1));
		default:
			return state;
	}
}

export default errorReducer;
