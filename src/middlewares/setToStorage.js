export default store => next => action => {
    const {setToStorage, ...rest} = action
    if (!setToStorage) return next(action)
    const item = JSON.stringify({...rest.payload, id: rest.randomId})
    localStorage.setItem(rest.randomId, item)
    next({...rest})
}
