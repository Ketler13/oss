import { DELETE_ITEM, ADD_ITEM } from '../constants'
import { items } from '../items'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const ItemModel = Record({
    "id": null,
    "title": null,
    "description": null,
    "image": null,
    "price": null
})

const defaultState = arrayToMap(items, ItemModel)

export default (state = defaultState, action) => {
  const { type, payload, randomId } = action
  switch (type) {
    case DELETE_ITEM:
      return state.delete(payload.id)

    case ADD_ITEM:
      return state.set(randomId, new ItemModel({...payload, id: randomId}))
  }
  return state
}
