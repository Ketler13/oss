import { DELETE_EXCERCISE, ADD_LINK } from '../constants'
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
  return state
}
