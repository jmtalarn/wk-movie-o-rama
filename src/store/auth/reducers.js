import * as ACTION from './action-types';



const initialState = {
	auth: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION.LOGIN:
			{
				return Object.assign({}, ...action.auth);
			}
		case ACTION.LOGOUT:
			{
				return Object.assign({}, ...action.auth);
			}
		default:
			return state;
	}
};
export default authReducer;
