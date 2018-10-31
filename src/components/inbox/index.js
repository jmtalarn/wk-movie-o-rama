import React from 'react';
import InboxContainer from './container/InboxContainer.js';

const Inbox = (props) => (
	<InboxContainer id={props.match.params.id} />

);

export default Inbox;
