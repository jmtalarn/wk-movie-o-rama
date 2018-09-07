import React from 'react';
import { connect } from 'react-redux';

class PrivateWithChildrenComponent extends React.Component{

	render(){
		return (
			<React.Fragment>
				{this.props.isAuthenticated===true?this.props.children:null}
			</React.Fragment>
		);
	}


}
const PrivateComponentState = function (state) {
	const { auth } = state;
	const { isAuthenticated } = auth;
	return {
		isAuthenticated,
	};
};

const PrivateComponent = connect(PrivateComponentState, {})(PrivateWithChildrenComponent);

export default PrivateComponent;
