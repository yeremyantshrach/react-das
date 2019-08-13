export const types = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING'
}

export const startLoading = () => ({
    type: types.START_LOADING,
    payload: true
})

export const stopLoading = () => ({
    type: types.STOP_LOADING,
    payload: false
})