import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

/* Root Reducer */
const rootReducer = combineReducers({
  movies: movieReducer
});

export default rootReducer;
