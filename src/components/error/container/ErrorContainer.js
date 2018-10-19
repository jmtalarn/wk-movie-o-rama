import Error from '../view/Error';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { dismissError } from '../actions';

const ErrorState = function (state, props) {
	const { error } = state;
	console.log("ErrorState", error);
	return {
		error
	};

};
const ErrorDispatch = function (dispatch) {
	return {
		redirect: () => { dispatch(push("/")); },
		dismissError: (index) => { dispatch(dismissError(index)); }
	};
};
const ErrorContainer = connect(
	ErrorState,
	ErrorDispatch
)(Error);

export default ErrorContainer;
