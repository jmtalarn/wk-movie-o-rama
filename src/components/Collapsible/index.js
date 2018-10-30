import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

class Collapsible extends React.Component {
	constructor(props) {
		super(props);
		this.state = { collapsed: (props.collapsed || true) };
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		console.log("Toggle!");
		this.setState({ collapsed: !this.state.collapsed });
	}
	render() {
		const { children } = this.props;
		const { description } = this.props;
		const stateClass = this.state.collapsed ? 'collapsed' : 'expanded';
		const buttonText = `${this.state.collapsed ? 'See' : 'Hide'} ${description}`;

		return (<div className={`collapsible-component ${stateClass}`}>
			<button
				onClick={this.toggle}
			>
				{buttonText} <FontAwesomeIcon icon="caret-left" />
			</button>
			<div className="children">
				{children}
			</div>
		</div >
		);
	}
}


export default Collapsible;
