import * as ACTION from './types';
import { ERROR } from '../../error/actions/types';

import Auth from '../../auth/Auth';

const auth = new Auth();

const uri = 'api/movies';

function getMoviesSuccess(movies) {
	return {
		type: ACTION.MOVIES_SUCCESS,
		movies,
	};
}
function getMoviesError(error) {
	return {
		type: ERROR,
		error,
	};
}
export function getMovies() {

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
			.then(json => dispatch(getMoviesSuccess(json)))
			.catch(error => { console.log(error); return dispatch(getMoviesError(error)); });
	};
}



