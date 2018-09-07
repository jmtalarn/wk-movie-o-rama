import * as ACTION from './types';
import Auth  from '../../auth/Auth';

const auth = new Auth();


function getProfileSuccess(profile) {
	return {
		type: ACTION.PROFILE_SUCCESS,
		profile,
	};
}
function getProfileError(error) {
	return {
		type: ACTION.PROFILE_ERROR,
		error,
	};
}
export function getProfile() {

	return dispatch=> {
		auth.check()
			.then(response =>{
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
			})
			.then(json => dispatch(getProfileSuccess(json)))
			.catch(error => dispatch(getProfileError(error)));
	};
}



