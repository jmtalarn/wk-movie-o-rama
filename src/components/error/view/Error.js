import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Error.css';


class Error extends React.Component {

	render() {
		const { errors } = this.props;
		return (
			errors.length ?
				<div className="errors-box"
				>
					<h2>Some errors have occurred :</h2>
					{errors.map((error, idx) => (
						<button
							key={idx}
							className="error"
							onClick={() => this.props.dismissError(idx)}
							title="Click to dismiss the error..."
						>
							<FontAwesomeIcon className="icon" icon="trash-alt" />
							{error.message}
						</button>
					))}

				</div>
				: null

		);
	}

};

export default Error;
