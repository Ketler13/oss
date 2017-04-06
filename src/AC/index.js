import { DELETE_ITEM, ADD_ITEM, CHANGE_ROLE, DELETE_ALL_ITEMS, GET_FROM_STORAGE } from '../constants'

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
    generateId: true,
    setToStorage: true
  }
}

export function changeRole() {
  return {
    type: CHANGE_ROLE
  }
}

export function deleteAllItems() {
  return {
    type: DELETE_ALL_ITEMS
  }
}

export function getFromStorage() {
  return {
    type: GET_FROM_STORAGE,
    getFromStorage: true
  }
}
