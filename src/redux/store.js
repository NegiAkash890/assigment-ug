/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import thunk from 'redux-thunk';
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
