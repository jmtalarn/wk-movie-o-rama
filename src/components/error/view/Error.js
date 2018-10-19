import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
					<h2>Some errors have occurred :</h2>
					{error.map((er, idx) => (
						<button
							className="error"
							onClick={() => this.props.dismissError(idx)}
							title="Click to dismiss the error..."
						>
							<FontAwesomeIcon className="icon" icon="trash-alt" />
							{er.message}
						</button>
					))}

				</div>
				: null

		);
	}

};

export default Error;
