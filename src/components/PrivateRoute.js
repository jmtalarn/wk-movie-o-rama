import React from 'react';
import {
	Route,
	Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRouteComponent extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
	}

	render(){
		return (
		this.props.isAuthenticated===true?
		(
			<Route path={this.props.path} render={this.props.component} />
		):
		(<Redirect to={{
			pathname: '/login',
			state: { from: this.props.path }
		}} />));
	}


}
const PrivateRouteState = function (state) {
	const { auth } = state;
	const { isAuthenticated } = auth;
	return {
		isAuthenticated,
	};
};

const PrivateRoute = connect(PrivateRouteState, {})(PrivateRouteComponent);

export default PrivateRoute;
