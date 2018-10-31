import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Inbox.css';


class Inbox extends React.Component {
	componentWillMount() {
		this.props.getInbox();
	}

	renderInbox() {
		console.log(this.props);
		return (null);
	}
	render() {

		return (
			<div className="inbox-view">
				<h2>Inbox</h2>
				{this.renderInbox()}
			</div>

		);
	}
}

export default Inbox;
