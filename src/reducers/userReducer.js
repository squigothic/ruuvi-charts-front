import { initializeMeasurements } from './measurementsReducer'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_USER':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const initUser = user => {
  window.localStorage.setItem('user', user)
  return async dispatch => {
    dispatch({
      type: 'INIT_USER',
      data: user,
    })
    dispatch(initializeMeasurements(user))
  }
}

export const logoutUser = () => {
  window.localStorage.clear()
  return {
    type: 'LOGOUT',
    data: null,
  }
}

export default userReducer
