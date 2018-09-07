import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createCLILogger from 'redux-cli-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from '../components/auth/reducers';
import loginReducer from '../components/login/reducers';
import profileReducer from '../components/profile/reducers';

// redux-cli-logger enables logging in CLI, so in tests with test environment variable defined will print out things on the screen
const loggerMiddleware = process.env.NODE_ENV === 'test' ? createCLILogger({}) : createLogger();

const rootReducer = combineReducers(
		{
			auth: authReducer,
			login: loginReducer,
			profile: profileReducer,
		}
);


const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	)
);

export default store;
