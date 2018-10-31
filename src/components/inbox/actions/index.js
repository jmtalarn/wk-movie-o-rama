import * as ACTION from './types';
import { ERROR } from '../../error/actions/types';
import Auth from '../../auth/Auth';

const auth = new Auth();

const uri = '/api/profiles/inbox';

function getInboxSuccess(inbox) {
	return {
		type: ACTION.INBOX_SUCCESS,
		inbox,
	};
}
function getInboxError(error) {
	return {
		type: ERROR,
		error,
	};
}
export function getInbox(id) {
	return dispatch => {
		auth.fetch(uri)
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
			.then(json => dispatch(getInboxSuccess(json)))
			.catch(error => { console.log(error); return dispatch(getInboxError(error)); });
	};
}



