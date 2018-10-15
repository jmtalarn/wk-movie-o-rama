class Auth {

	constructor(baseUrl = '/api/auth/') {
		this.baseUrl = baseUrl;
	}

	login(credentials) {
		//password: 'movieorama'
		return fetch(this.baseUrl + 'login',
			{
				method: 'POST',
				headers: { "Content-Type": "application/json; charset=utf-8" },
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
	fetch(url, parameters) {

		const newParameters = Object.assign({},
			parameters,
			{
				headers:
				{
					"x-access-token": localStorage.getItem('id_token'),
					"Content-Type": "application/json; charset=utf-8"
				}
			});
		return fetch(url, newParameters);
	}
	getProfileId() {
		return localStorage.getItem('id_profile');
	}

};

export default Auth;
