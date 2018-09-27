import Movie from '../view/Movie';
import { getMovie, likeMovie, shareMovie } from '../actions';
import { getLoginProfiles } from '../../login/actions';
import { connect } from 'react-redux';

const MovieState = function (state, props) {
	const { movie } = state;
	const { id } = props;
	const { login: { profiles = [] } } = state;

	console.log({ state });
	return {
		id,
		movie,
		profiles,
	};

};
const MovieDispatch = function (dispatch) {
	return {
		getMovie: (id) => {
			dispatch(getLoginProfiles());
			dispatch(getMovie(id));
		},
		likeMovie: (id) => {
			dispatch(likeMovie(id));
		},
		shareMovie: (id, message, user) => {
			dispatch(shareMovie(id, message, user));
		}
	};
};
var MovieContainer = connect(
	MovieState,
	MovieDispatch
)(Movie);

export default MovieContainer;
