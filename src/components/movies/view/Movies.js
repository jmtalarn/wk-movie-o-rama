import React from 'react';
import {
	Redirect,
} from 'react-router-dom';

class Movies extends React.Component {
	componentWillMount(){
		this.props.getMovies();
	}

	renderMovies(){
		const {
			movies
		} = this.props;
		console.log({movies});
		return(
			<h1>This is where movies will be rendered</h1>
		);
	}
	render() {
		return (
			<div>
				<h1>Movies page</h1>
				{this.renderMovies()}
			</div>

		);
	}
}

export default Movies;
