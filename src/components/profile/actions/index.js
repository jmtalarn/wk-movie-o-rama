import * as ACTION from './types';
import { ERROR } from '../../error/actions/types';
import Auth from '../../auth/Auth';

const auth = new Auth();

const uri = 'api/profiles';

function getProfileSuccess(profile) {
	return {
		type: ACTION.PROFILE_SUCCESS,
		profile,
	};
}
function getProfileError(error) {
	return {
		type: ERROR,
		error,
	};
}
export function getProfile() {
	return dispatch => {
		auth.fetch(`${uri}/${auth.getProfileId()}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					const message = `${response.status} - ${response.statusText}`;
					return response.json()
						.then(json => {
							throw new Error(`${message}: ${json.message}`);
						});
				}
			})
			.then(json => dispatch(getProfileSuccess(json)))
			.catch(error => { console.log(error); return dispatch(getProfileError(error)); });
	};
}



