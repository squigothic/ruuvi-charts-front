import { initializeMeasurements } from './measurementsReducer'
import { login } from '../services/loginservice'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_USER':
      return action.data
    case 'SET_USER':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const initUser = credentials => {
  return async dispatch => {
    try {
      const response = await login(credentials)
      const user = { username: response.data.username, token: response.data.token }
      dispatch({
        type: 'INIT_USER',
        data: user,
      })
      window.localStorage.setItem('user', JSON.stringify(user))
      dispatch(initializeMeasurements(user.username))
    } catch (error) {
      console.log('error: ', error)
    }
  }
}

export const logoutUser = () => {
  window.localStorage.clear()
  return {
    type: 'LOGOUT',
    data: null,
  }
}

export const setUser = user => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data: user
    })

    try {
      dispatch(initializeMeasurements(user.username))
    } catch (error) {
      console.log('error: ', error)
    }

  }
}

export default userReducer
