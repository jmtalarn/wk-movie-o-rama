import * as ACTION from './types';

export function raiseError(error) {

	return {
		type: ACTION.ERROR,
		error,
	};
}

export function dismissError(errorIndex) {
	return dispatch => {
		dispatch({
			type: ACTION.DISMISS_ERROR,
			errorIndex,
		});
	};
}

