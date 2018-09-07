import React from 'react';
import {
	Redirect,
} from 'react-router-dom';

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
					<li key={profile.username}>
					<h3>{profile.username}</h3>
					<img src={`/api/profiles/${profile.id}/avatar`}
						style={
								{
									width: '2rem',
									height: '2rem'
								}
							}
					/>
					<button onClick={this.onClickLogin.bind(this,profile)}>Log in</button>
				</li>
				)) }
			</ul>
			);
	}
	onClickLogin(profile){
		this.props.loginProfile(profile);
	}
	render() {
		const {
			profiles,
			error
		} = this.props;

		return(
			error?
			this.renderError(error):(
				this.props.auth.isAuthenticated?
					<Redirect to={{
						pathname: '/',
						state: { from: this.props.path }
						}}
					/>:
					this.renderProfiles(profiles)
				)
		);
	}
}

export default LoginProfiles;
