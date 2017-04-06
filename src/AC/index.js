import { DELETE_ITEM, ADD_ITEM, CHANGE_ROLE } from '../constants'

export function deleteItemById(id) {
  return {
      type: DELETE_ITEM,
      payload: {
          id
      }
  }
}

export function addItem(config) {
  return {
    type: ADD_ITEM,
    payload: {
      ...config
    },
    generateId: true
  }
}

export function changeRole() {
  return {
    type: CHANGE_ROLE
  }
}
