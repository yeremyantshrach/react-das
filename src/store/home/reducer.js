import { types } from './actions';

const initialState = {
    users: [],
    user: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_FETCHED_USERS:
            return {
                ...state,
                users: [...action.payload.users],
            };
        case types.SET_FETCHED_USER:
            return {
                ...state,
                user: {...action.payload.user},
            };
        default:
            return state;
    }
}