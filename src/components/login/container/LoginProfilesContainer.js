import LoginProfiles from '../view/LoginProfiles';
import * as actions from '../actions';
import { login } from '../../auth/actions';
import { connect } from 'react-redux';

const LoginProfilesState = function (state) {
	console.log("Container state", state);
	const { login, auth } = state;
	const { profiles = [], error } = login;

	return {
		auth,
		profiles,
		error,
	};

};
const LoginProfilesDispatch = function (dispatch) {
	return {
		getLoginProfiles: () => {
			dispatch(actions.getLoginProfiles());
		},
		loginProfile: (profile)=>{
			dispatch(login({ username: profile.username, password: 'movieorama'}));
		}
	};
};
var LoginProfilesContainer = connect(
	LoginProfilesState,
	LoginProfilesDispatch
)(LoginProfiles);

export default LoginProfilesContainer;
