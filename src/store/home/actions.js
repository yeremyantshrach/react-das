import { startLoading, stopLoading } from '../ui/actions';

export const types = {
    SET_FETCHED_USERS: 'SET_FETCHED_USERS',
    SET_FETCHED_USER: 'SET_FETCHED_USER'
}

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            dispatch(setUsers(users));
        } catch(e) {
            console.log(e);
        } finally {
            dispatch(stopLoading())
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