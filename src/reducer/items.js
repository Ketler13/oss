import { DELETE_ITEM } from '../constants'
import { goods } from '../items'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const ItemModel = Record({
    "id": null,
    "title": null,
    "desc": null,
    "img": null,
    "price": null
})

const defaultState = arrayToMap(goods, ItemModel)

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE_ITEM:
      return state.delete(payload.id)
  }
  return state
}
