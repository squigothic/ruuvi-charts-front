import { setToken, getLatestMeasurements, getLatestAverages, getAverages, getTimeperiod } from '../services/measurements'
import { changeLoadingStatus } from './loadingStateReducer'
import { logoutUser } from './userReducer'
import { showNotification } from './notificationReducer'


const initialState = {}

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MEASUREMENTS_FETCH_SUCCESS':
      return {
        ...state,
        recurring: action.data.measurements,
        currentTimeperiod: action.data.timeperiod,
      }
    case 'AVERAGES_FETCH_SUCCESS':
      return {
        ...state,
        average: action.data.averages,
        currentTimeperiod: action.data.timeperiod
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
      // TODO: Maybe use Promise.all to speed up requests
      setToken(token)
      const averages = await getLatestAverages(user)
      dispatch({
        type: 'AVERAGES_FETCH_SUCCESS',
        data: {
          averages: averages.data,
          timeperiod: 'Last 24 hours'
        },
      })
      const measurements = await getLatestMeasurements(user)
      if (measurements.status !== 200) {
        throw new Error('Something went wrong with the request')
      }

      dispatch({
        type: 'MEASUREMENTS_FETCH_SUCCESS',
        data: {
          measurements: measurements.data,
          timeperiod: 'Last 24 hours',
        },
      })
      dispatch(changeLoadingStatus('false', ''))
    } catch (error) {
      dispatch(changeLoadingStatus('false', ''))
      console.log('response error')
      dispatch(logoutUser())
      dispatch(showNotification('An error occurred, try logging in again', 4))
    }
  }
}

export const getTimeperiodData = timeperiod => {
  return async (dispatch, getState) => {
    dispatch(changeLoadingStatus('true', 'Loading measurements...'))
    const {
      user: { username },
    } = getState()
    const measurements = await getTimeperiod(
      timeperiod,
      username
    )
    dispatch({
      type: 'MEASUREMENTS_FETCH_SUCCESS',
      data: {
        measurements: measurements.data,
        timeperiod: timeperiod
      },
    })
    dispatch(changeLoadingStatus('false', ''))
  }
}

export const getAverageForTimeperiod = timeperiod => {
  return async (dispatch, getState) => {
    dispatch(changeLoadingStatus('true', 'Loading averages...'))
    const {
      user: { username },
    } = getState()
    const averages = await getAverages(timeperiod, username)
    dispatch({
      type: 'AVERAGES_FETCH_SUCCESS',
      data: {
        averages: averages.data,
        timeperiod: timeperiod
      },
    })
    dispatch(changeLoadingStatus('false', ''))
  }
}

export default measurementsReducer
