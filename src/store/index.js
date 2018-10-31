import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createCLILogger from 'redux-cli-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from '../components/auth/reducers';
import loginReducer from '../components/login/reducers';
import profileReducer from '../components/profile/reducers';
import moviesReducer from '../components/movies/reducers';
import movieReducer from '../components/movie/reducers';
import inboxReducer from '../components/inbox/reducers';
import errorReducer from '../components/error/reducers';

// redux-cli-logger enables logging in CLI, so in tests with test environment variable defined will print out things on the screen
const loggerMiddleware = process.env.NODE_ENV === 'test' ? createCLILogger({}) : createLogger();

const rootReducer = combineReducers(
	{
		auth: authReducer,
		login: loginReducer,
		profile: profileReducer,
		movies: moviesReducer,
		movie: movieReducer,
		errors: errorReducer,
		inbox: inboxReducer,
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
