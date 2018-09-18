import Movies from '../view/Movies';
import { getMovies } from '../actions';
import { connect } from 'react-redux';

const MoviesState = function (state) {
	const { movies } = state;

	return {
		movies,
	};
};
const MoviesDispatch = function (dispatch) {
	return {
		getMovies: () => {
			dispatch(getMovies());
		},
	};
};
var MoviesContainer = connect(
	MoviesState,
	MoviesDispatch
)(Movies);

export default MoviesContainer;
