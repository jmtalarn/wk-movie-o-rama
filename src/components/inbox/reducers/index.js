import * as ActionTypes from '../actions/types';

function inboxReducer(state = [], action) {
	switch (action.type) {
		case ActionTypes.INBOX_SUCCESS:
			return Object.assign({}, state, {
				info: action.inbox,
			});
		default:
			return state;
	}
}

export default inboxReducer;
