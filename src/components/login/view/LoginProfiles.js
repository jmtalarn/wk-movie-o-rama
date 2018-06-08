import React from 'react';


class LoginProfiles extends React.Component {
	componentWillMount() {
		this.props.getLoginProfiles();
	}
	renderError(error){
		return(<h2 style={ {color: 'red'}}>{error.message}</h2>);
	}
	renderProfiles(profiles){
		return(
			<ul>
			{ profiles.map(profile=>(
				<li>
					<h3>{profile.username}</h3>
					<button>Log in</button>
				</li>
				)) }
			</ul>
			);
	}
	render() {
		const {
			profiles,
			error
		} = this.props;

		return(
			error?
			this.renderError(error):
			this.renderProfiles(profiles)
		);
	}
}

export default LoginProfiles;
