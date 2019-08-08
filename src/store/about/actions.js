export const types = {
    SET_FETCHED_POSTS: 'SET_FETCHED_POSTS',
    SET_FETCHED_POST: 'SET_FETCHED_POST'
};

export const setPosts = (posts) => {
    return {
        type: types.SET_FETCHED_POSTS,
        payload: {
            posts
        }
    }
}

export const setPost = (post) => {
    return {
        type: types.SET_FETCHED_POST,
        payload: {
            post
        }
    }
}