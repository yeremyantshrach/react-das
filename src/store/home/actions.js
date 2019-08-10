export const types = {
    SET_FETCHED_USERS: 'SET_FETCHED_USERS',
    SET_FETCHED_USER: 'SET_FETCHED_USER'
}

export const fetchUsers = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            dispatch(setUsers(users));
            console.log(getState())
        } catch(e) {
            console.log(e);
        }
    }
}

export const setUsers = (users) => {
    return {
        type: types.SET_FETCHED_USERS,
        payload: {
            users,
        }
    }
}

export const setUser = (user) => {
    return {
        type: types.SET_FETCHED_USER,
        payload: {
            user,
        }
    }
}