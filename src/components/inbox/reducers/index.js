import * as ActionTypes from '../actions/types';

function inboxReducer(state = { data: [] }, action) {
	switch (action.type) {
		case ActionTypes.INBOX_SUCCESS:
			return { data: action.inbox };
		default:
			return state;
	}
}

export default inboxReducer;
