import * as ACTION from './types';
import Auth  from '../../auth/Auth';

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
		type: ACTION.MOVIES_ERROR,
		error,
	};
}
export function getMovies() {

	return dispatch=> {
		auth.fetch(uri)
			.then(response =>{
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
			})
			.then(json => dispatch(getMoviesSuccess(json)))
			.catch(error => dispatch(getMoviesError(error)));
	};
}



