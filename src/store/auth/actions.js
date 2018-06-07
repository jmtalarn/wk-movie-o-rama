import * as ACTION from './action-types';


export const login = (auth) => ({
	type: ACTION.LOGIN,
	auth,
});
export const logout = () => ({
	type: ACTION.LOGOUT,
	auth: {},
});
