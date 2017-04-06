import { arrayToMap } from '../helpers'

export default store => next => action => {
    const {getFromStorage, ...rest} = action
    if (!getFromStorage) return next(action)
    let items = []
    if (localStorage.length) {
      Object.keys(localStorage).forEach(item => {
        items.push(JSON.parse(localStorage[item]))
      })
    }
    next({type: rest.type, payload: arrayToMap(items)})
}
