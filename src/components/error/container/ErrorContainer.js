import Error from '../view/Error';
import { connect } from 'react-redux';

const ErrorState = function (state, props) {
	const { error } = state;

	return {
		error
	};

};
const ErrorContainer = connect(
	ErrorState,
	{}
)(Error);

export default ErrorContainer;
