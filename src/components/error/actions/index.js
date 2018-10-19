import * as ACTION from './types';
import { push } from 'react-router-redux';

export function raiseError(error) {

	return {
		type: ACTION.ERROR,
		error,
	};
}

export function dismissError(errorIndex) {
	return dispatch => {
		dispatch(push("/"));
		dispatch({
			type: ACTION.DISMISS_ERROR,
			errorIndex,
		});
	};
}

