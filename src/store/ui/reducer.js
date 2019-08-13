import { types } from './actions';

const initialState = {
    loading: false
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.START_LOADING:
        case types.STOP_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}