import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
// import { logger } from './middlewares/logger';
import loadingMiddleware from './middlewares/loadingMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        combineReducers(reducers),
        composeEnhancers(applyMiddleware(loadingMiddleware, thunk))
    );
}
export default configureStore;
