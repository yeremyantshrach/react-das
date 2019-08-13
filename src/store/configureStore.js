import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { logger } from './middlewares/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        combineReducers(reducers),
        composeEnhancers(applyMiddleware(logger, thunk))
    );
}
export default configureStore;
