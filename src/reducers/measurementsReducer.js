import measurementService from '../services/measurements'
import { changeLoadingStatus } from './loadingStateReducer'
import { logoutUser } from './userReducer'
import { showNotification } from './notificationReducer'


const initialState = { data: [] }

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.data.measurements,
        currentTimeperiod: action.data.timeperiod,
      }
    default:
      return state
  }
}

export const initializeMeasurements = user => {
  return async (dispatch, getState) => {
    try {
      dispatch(changeLoadingStatus('true', 'Loading measurements...'))
      const {
        user: { token },
      } = getState()
      measurementService.setToken(token)
      const measurements = await measurementService.getAll(user)
      dispatch({
        type: 'FETCH_SUCCESS',
        data: {
          measurements: measurements.data,
          timeperiod: 'Last 24 hours',
        },
      })
      dispatch(changeLoadingStatus('false', ''))
    } catch (error) {
      dispatch(changeLoadingStatus('false', ''))
      console.log('response error')
      console.log(error.response.status)
      dispatch(logoutUser())
      dispatch(showNotification('An error occurred, try logging in again', 4))
    }
  }
}

export const getTimeperiod = timeperiod => {
  return async (dispatch, getState) => {
    dispatch(changeLoadingStatus('true', 'Loading measurements...'))
    const {
      user: { username },
    } = getState()
    const measurements = await measurementService.getTimeperiod(
      timeperiod,
      username
    )
    dispatch({
      type: 'FETCH_SUCCESS',
      data: {
        measurements: measurements.data,
        timeperiod: timeperiod
      },
    })
    dispatch(changeLoadingStatus('false', ''))
  }
}

export default measurementsReducer
