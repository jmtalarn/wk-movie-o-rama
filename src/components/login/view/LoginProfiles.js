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
	renderProfiles(){
		const {
			profiles,
			auth,
			error
		} = this.props;

		return(
			<React.Fragment>
				{this.renderError(error || auth.error)}
				<ul>
				{ profiles.map(profile=>(
						<li key={profile.username}>
						<h3>{profile.username}</h3>
						<img src={`/api/profiles/${profile.id}/avatar`}
							alt={`${profile.username} avatar to identify him/her visually`}
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

			</React.Fragment>
			);
	}
	onClickLogin(profile){
		this.props.loginProfile(profile);
	}
	render() {

		return(
			this.props.auth.isAuthenticated?
				<Redirect to={{
					pathname: '/',
					state: { from: this.props.path }
					}}
				/>:
				this.renderProfiles()
		);
	}
}

export default LoginProfiles;
