import measurementService from '../services/measurements'

const initialState = { data: [] }

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_FETCH':
      return { ...state, isFetching: true }
    case 'FETCH_SUCCESS':
      return { ...state, data: action.data, isFetching: false }
    default:
      return state
  }
}

export const initializeMeasurements = user => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'INIT_FETCH',
    })
    const { user: { token } } = getState()
    measurementService.setToken(token)
    const measurements = await measurementService.getAll(user)
    dispatch({
      type: 'FETCH_SUCCESS',
      data: measurements.data,
    })
  }
}

export const getTimeperiod = (period) => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'INIT_FETCH',
    })
    const { user: { user } } = getState()
    const measurements = await measurementService.getTimeperiod(period, user)
    dispatch({
      type: 'FETCH_SUCCESS',
      data: measurements.data,
    })
  }
}

export default measurementsReducer
