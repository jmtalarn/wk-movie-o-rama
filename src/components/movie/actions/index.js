import * as ACTION from './types';
import Auth  from '../../auth/Auth';

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
		type: ACTION.MOVIE_ERROR,
		error,
	};
}
export function getMovie(id) {
	return dispatch=> {
		auth.fetch(`${uri}/${id}`)
			.then(response =>{
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
		auth.fetch(`${uri}/${id}/like`, {method: 'POST'})
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



