import { CHANGE_ROLE } from '../constants'

const defaultState = {
  isAdmin: false
}

export default (state = defaultState, action) => {
  const { type } = action

  switch (type) {
    case CHANGE_ROLE:
      return {
        isAdmin: !state.isAdmin
      }
  }

  return state
}
