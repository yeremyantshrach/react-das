import { createStore, combineReducers, compose } from 'redux';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(combineReducers(reducers), composeEnhancers());

export default configureStore;
