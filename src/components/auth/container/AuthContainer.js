import Auth from '../view/Auth';
import * as actions from '../actions';
import { connect } from 'react-redux';

const AuthState = function (state) {
	const { auth } = state;
	const { isAuthenticated, profile } = auth;
	return {
		isAuthenticated,
		profile,
	};
};
const AuthDispatch = function (dispatch) {
	return {
		login: (credentials) => {
			dispatch(actions.login(credentials));
		},
		logout: () => {
			dispatch(actions.logout());
		},
	};
};
var AuthContainer = connect(
	AuthState,
	AuthDispatch
)(Auth);

export default AuthContainer;
