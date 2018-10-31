import Inbox from '../view/Inbox';
import { getInbox } from '../actions';
import { connect } from 'react-redux';

const InboxState = function (state) {

	const { inbox } = state;
	return {
		inbox,
	};
};
const InboxDispatch = function (dispatch) {
	return {
		getInbox: () => {
			dispatch(getInbox());
		},
	};
};
var InboxContainer = connect(
	InboxState,
	InboxDispatch
)(Inbox);

export default InboxContainer;
