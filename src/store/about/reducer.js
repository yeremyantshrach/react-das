import { types } from './actions';

const initialState = {
    posts: [],
    post: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_FETCHED_POSTS:
            return {
                ...state,
                posts: [...action.payload.posts]
            }
        case types.SET_FETCHED_POST:
                return {
                    ...state,
                    post: {...action.payload.post}
                }
        default:
            return state;
    }
}