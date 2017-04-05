import { DELETE_ITEM } from '../constants'

export function deleteItemById(id) {
    return {
        type: DELETE_ITEM,
        payload: {
            id
        }
    }
}
