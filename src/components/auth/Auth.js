class Auth {

	constructor(baseUrl='/api/auth/'){
		this.baseUrl = baseUrl;
	}

	login(credentials) {
		console.log({credentials});
		//password: 'movieorama'
		return fetch(this.baseUrl + 'login',
			{
				method: 'POST',
				headers: {	"Content-Type": "application/json; charset=utf-8"},
				body: JSON.stringify(credentials)
			}
		);
	}
	logout() {
		return fetch(this.baseUrl + 'logout', { method: 'POST', headers: { "x-access-token": localStorage.getItem('id_token') } });
	}
	check() {
		return fetch(this.baseUrl + 'check', { headers: { "x-access-token": localStorage.getItem('id_token') } });
	}

};

export default Auth;
