import Profile from '../view/Profile';

import { connect } from 'react-redux';

const ProfilesState = function (state) {
	console.log("Container state", state);
	const { auth } = state;

	return {
		auth,
	};
};
const ProfileDispatch = {};
var ProfileContainer = connect(
	ProfilesState,
	ProfileDispatch
)(Profile);

export default ProfileContainer;
