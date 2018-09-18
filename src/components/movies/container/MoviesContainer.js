import Movies from '../view/Movies';
import { getMovies } from '../actions';
import { connect } from 'react-redux';

const MoviesState = function (state) {
	console.log("Container state", state);
	const { Movies } = state;
	console.log(state);
	return {
		Movies,
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
	MoviessState,
	MoviesDispatch
)(Movies);

export default MoviesContainer;
