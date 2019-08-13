const logger = store => next => (action) => {
    // console.log(store);
    // console.log(next);
    // console.log(action);
    const nextAction = next(action);
    console.log(nextAction instanceof Promise);
    // next(action);
    console.group(action.type)
    console.info('dispatching', action)

    console.log('next state', store.getState())
    console.groupEnd()
    return nextAction
}

export {
    logger,
}