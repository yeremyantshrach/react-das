export const types = {
    SET_FETCHED_POSTS: 'SET_FETCHED_POSTS',
    SET_FETCHED_POST: 'SET_FETCHED_POST',
    SET_FETCHED_COMMENTS: 'SET_FETCHED_COMMENTS'
};

export const fetchPosts = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            console.log(posts);
            dispatch(setPosts(posts))
        } catch(e) {
            console.log(e);
        }
    }
}

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

export const setComments = comments => ({
    type: types.SET_FETCHED_COMMENTS,
    payload: {
        comments
    }
})
