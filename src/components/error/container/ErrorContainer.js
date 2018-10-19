import Error from '../view/Error';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const ErrorState = function (state, props) {
	const { error } = state;
	console.log("ErrorState", error);
	return {
		error
	};

};
const ErrorDispatch = function (dispatch) {
	return {
		redirect: () => { dispatch(push("/")); }
	};
};
const ErrorContainer = connect(
	ErrorState,
	ErrorDispatch
)(Error);

export default ErrorContainer;
