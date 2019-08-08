export const types = {
    SET_FETCHED_USERS: 'SET_FETCHED_USERS',
    SET_FETCHED_USER: 'SET_FETCHED_USER'
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