class Auth {

	constructor(baseUrl='/api/auth'){
		this.baseUrl = baseUrl;
	}

	login(credentials) {
		//credentials
		//
		//username: username,
		//	//token: this.token
		//password: 'movieorama'
		return fetch(this.baseUrl + 'login', { method: 'POST', body: JSON.stringify(credentials)});
	}
	logout() {
		return fetch(this.baseUrl + 'logout');
	}
	check() {
		return fetch(this.baseUrl + 'check');
	}
}

};

export default Auth;
