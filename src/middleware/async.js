export default ({dispatch}) => next => action => {
    // if action's payload is not existed or it is not promise
    // forward the action to the next middleware with next()
    if (!action.payload || !action.payload.then) {
        return next(action); // not returning value but to make sure the exit the middleware
    }


    // if there's promise, we want to wait for it to resolved, and get the data to create the new action
    // and dispatch the new action
    // this will ensure it goes through the middleware chain again
    action.payload.then(response => {
        const newAction = {
            ...action,
            payload: response
        }

        dispatch(newAction);
    })

}