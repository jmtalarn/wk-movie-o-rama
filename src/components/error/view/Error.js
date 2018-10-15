import React from 'react';

const Error = ({ error }) => {

	return (
		<div
			style={{
				position: 'absolute',
				top: '2rem',
				border: '2px doted red',
				borderRadius: '10px'
			}}
		>
			{error}
		</div>
	);
};

export default Error;
