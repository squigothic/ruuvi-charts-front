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
  return async dispatch => {
    dispatch({
      type: 'INIT_FETCH',
    })
    const measurements = await measurementService.getAll(user)
    dispatch({
      type: 'FETCH_SUCCESS',
      data: measurements.data,
    })
  }
}

export default measurementsReducer
