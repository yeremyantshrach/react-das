export const types = {
    SET_FETCHED_USERS: 'SET_FETCHED_USERS'
}

export const setUsers = (users) => {
    return {
        type: types.SET_FETCHED_USERS,
        payload: {
            users,
        }
    }
}