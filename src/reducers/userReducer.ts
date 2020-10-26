import { initializeMeasurements } from './measurementsReducer'
import { login } from '../services/loginservice'
import { changeLoadingStatus } from './loadingStateReducer'
import { showNotification } from './notificationReducer'
import { LoadingStateReducerAction, RootState, User } from '../types/types'
import { ThunkAction } from 'redux-thunk'

export type UserReducerAction = {
  type: string;
  data: User | null;
}

const userReducer = (state = null, action: UserReducerAction) => {
  switch (action.type) {
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

export const loginUser = (credentials: User):
ThunkAction<void, RootState, unknown, UserReducerAction | LoadingStateReducerAction> => {
  return async dispatch => {
    try {
      dispatch(changeLoadingStatus(true, 'Logging in...'))
      const response = await login(credentials)
      const user = { username: response.data.username, token: response.data.token }
      dispatch({
        type: 'LOGIN_USER',
        data: user
      })
      window.localStorage.setItem('user', JSON.stringify(user))
      dispatch(initializeMeasurements(user.username))
    } catch (error) {
      dispatch(changeLoadingStatus(false, ''))
      console.log('response error')
      console.log(error.response.status)
      dispatch(showNotification('Wrong username or password', 4))
    }
  }
}

export const logoutUser = () => {
  console.log('logataan ulos')
  window.localStorage.clear()
  return {
    type: 'LOGOUT_USER',
    data: null,
  }
}

export const setUser = (user: User):
ThunkAction<void, RootState, unknown, UserReducerAction> => {
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
