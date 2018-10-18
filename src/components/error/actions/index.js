import * as ACTION from './types';


export function raiseError(error) {

	return {
		type: ACTION.ERROR,
		error,
	};
}


