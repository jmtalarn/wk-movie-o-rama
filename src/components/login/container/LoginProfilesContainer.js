import LoginProfiles from '../view/LoginProfiles';
import * as actions from '../actions';
import { connect } from 'react-redux';

const LoginProfilesState = function (state) {
	console.log("Container state", state);
	const { login } = state;
	const { profiles = [], error } = login;
	return {
		profiles,
		error,
	};
};
const LoginProfilesDispatch = function (dispatch) {
	return {
		getLoginProfiles: () => {
			dispatch(actions.getLoginProfiles());
		}
	};
};
var LoginProfilesContainer = connect(
	LoginProfilesState,
	LoginProfilesDispatch
)(LoginProfiles);

export default LoginProfilesContainer;
