import React from 'react';
import './Error.css';


class Error extends React.Component {
	componentWillMount() {
		const { redirect } = this.props;
		redirect();
	}
	render() {
		const { error } = this.props;
		return (
			error.length ?
				<div className="errors-box"
				>
					{error.map(er => (<div className="error">{er.message}</div>))}
				</div>
				: null

		);
	}

};

export default Error;
