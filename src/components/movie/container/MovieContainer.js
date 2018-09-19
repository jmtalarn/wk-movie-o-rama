import Movie from '../view/Movie';
import { getMovie, likeMovie } from '../actions';
import { connect } from 'react-redux';

const MovieState = function (state,props) {
	const { movie } = state;
	const { id } = props;
	return {
		id,
		movie,
	};
};
const MovieDispatch = function (dispatch) {
	return {
		getMovie: (id) => {
			dispatch(getMovie(id));
		},
		likeMovie: (id) => {
			dispatch(likeMovie(id));
		},
	};
};
var MovieContainer = connect(
	MovieState,
	MovieDispatch
)(Movie);

export default MovieContainer;
