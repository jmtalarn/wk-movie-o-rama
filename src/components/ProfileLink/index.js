import React from 'react';
import './index.css';

const ProfileLink = ({ profile, className }) => {
	console.log(profile);
	return (profile ?
		<a className={`profile-link ${className}`} href={`/profile/${profile._id}`}>
			<img
				className="profile-avatar"
				alt={`The ${profile.username} avatar`}
				src={`/api/profiles/${profile._id}/avatar`}
			/>
		</a> : null
	);
};

export default ProfileLink;
