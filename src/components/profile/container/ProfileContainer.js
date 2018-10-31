import Profile from '../view/Profile';
import { getProfile } from '../actions';
import { connect } from 'react-redux';

const ProfilesState = function (state) {

	const { profile } = state;
	return {
		profile,
	};
};
const ProfileDispatch = function (dispatch) {
	return {
		getProfile: (id) => {
			dispatch(getProfile(id));
		},
	};
};
var ProfileContainer = connect(
	ProfilesState,
	ProfileDispatch
)(Profile);

export default ProfileContainer;
