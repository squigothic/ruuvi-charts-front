import { initializeMeasurements } from './measurementsReducer'
import { login } from '../services/loginservice'

const initialState = { username: null, isLoggingIn: false }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_LOGIN':
      return { ...state, isLoggingIn: true }
    case 'LOGIN_USER':
      return { ...action.data, isLoggingIn: false }
    case 'SET_USER':
      return action.data
    case 'LOGOUT_USER':
      return null
    default:
      return state
  }
}

export const loginUser = credentials => {
  return async dispatch => {
    try {
      dispatch({
        type: 'INIT_LOGIN'
      })
      const response = await login(credentials)
      const user = { username: response.data.username, token: response.data.token }
      dispatch({
        type: 'LOGIN_USER',
        data: user
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
    type: 'LOGOUT_USER',
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
