import { types } from './actions';

const initialState = {
    users: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_FETCHED_USERS:
            return {
                ...state,
                users: [...action.payload.users],
            };
        default:
            return state;
    }
}