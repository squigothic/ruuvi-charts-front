import measurementService from '../services/measurements'

const initialState = { data: [] }

const createDateDescription = context => {}

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_FETCH':
      return { ...state, isFetching: true }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.data.measurements,
        isFetching: false,
        timeperiodDescription: action.data.description,
      }
    default:
      return state
  }
}

export const initializeMeasurements = user => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'INIT_FETCH',
    })
    const {
      user: { token },
    } = getState()
    measurementService.setToken(token)
    const measurements = await measurementService.getAll(user)
    dispatch({
      type: 'FETCH_SUCCESS',
      data: {
        measurements: measurements.data,
        currentTimeperiod: 'Last 24 hours',
      },
    })
  }
}

export const getTimeperiod = (period, description) => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'INIT_FETCH',
    })
    const {
      user: { username },
    } = getState()
    const measurements = await measurementService.getTimeperiod(
      period,
      username
    )
    dispatch({
      type: 'FETCH_SUCCESS',
      data: {
        measurements: measurements.data,
        description,
      },
    })
  }
}

export default measurementsReducer
