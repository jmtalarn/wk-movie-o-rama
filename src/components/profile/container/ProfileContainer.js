import Profile from '../view/Profile';
import { getProfile } from '../actions';
import { connect } from 'react-redux';

const ProfilesState = function (state) {
	console.log("Container state", state);
	const { auth } = state;

	return {
		auth,
	};
};
const ProfileDispatch = function (dispatch) {
	return {
		getProfile: () => {
			dispatch(getProfile());
		},
	};
};
var ProfileContainer = connect(
	ProfilesState,
	ProfileDispatch
)(Profile);

export default ProfileContainer;
