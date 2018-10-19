import * as ACTION from './types';
import { ERROR } from '../../error/actions/types';
import Auth from '../../auth/Auth';

const auth = new Auth();

const uri = '/api/movies';

function getMovieSuccess(movies) {
	return {
		type: ACTION.MOVIE_SUCCESS,
		movies,
	};
}
function getMovieError(error) {
	return {
		type: ERROR,
		error,
	};
}
export function getMovie(id) {
	return dispatch => {
		auth.fetch(`${uri}/${id}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
			})
			.then(json => dispatch(getMovieSuccess(json)))
			.catch(error => dispatch(getMovieError(error)));
	};
}

export function likeMovie(id) {

	return dispatch => {
		auth.fetch(`${uri}/${id}/like`, { method: 'POST' })
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
			})
			.then(json => dispatch(getMovieSuccess(json)))
			.catch(error => dispatch(getMovieError(error)));
	};
}

export function shareMovie(id, message, user) {
	return dispatch => {
		auth.fetch(`${uri}/${id}/share`, { method: 'POST', body: JSON.stringify({ message, user }) })
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
			})
			.then(json => dispatch(getMovieSuccess(json)))
			.catch(error => dispatch(getMovieError(error)));
	};
}



