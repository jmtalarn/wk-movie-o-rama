import Error from '../view/Error';
import { connect } from 'react-redux';
import { dismissError } from '../actions';

const ErrorState = function (state, props) {
	const { errors } = state;

	return {
		errors
	};

};
const ErrorDispatch = function (dispatch) {
	return {
		dismissError: (index) => { dispatch(dismissError(index)); }
	};
};
const ErrorContainer = connect(
	ErrorState,
	ErrorDispatch
)(Error);

export default ErrorContainer;
