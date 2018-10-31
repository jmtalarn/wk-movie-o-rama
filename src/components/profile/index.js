import React from 'react';
import ProfileContainer from './container/ProfileContainer.js';

const Profile = (props) => (
	<ProfileContainer id={props.match.params.id} />

);

export default Profile;
