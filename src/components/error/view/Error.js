import React from 'react';
import './Error.css';

const Error = ({ error }) => {

	return (
		error.length ?
			<div className="errors-box"
			>
				{error.map(er => (<div className="error">{er.message}</div>))}
			</div>
			: null

	);
};

export default Error;
