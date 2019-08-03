import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const initialState = {
    counter: 0,
    word: ''
}

function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'CHANGE_WORD':
            return {
                ...state,
                word: action.payload
            }
        default:
            return state
    }
}

const store = createStore(counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);