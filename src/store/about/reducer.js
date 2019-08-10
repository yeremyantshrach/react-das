import {types} from './actions';

const initialState = {
    posts: [],
    post: {},
    comments: []
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
        case types.SET_FETCHED_COMMENTS:
            return {
                ...state,
                comments: [...action.payload.comments]
            }
        default:
            return state;
    }
}
