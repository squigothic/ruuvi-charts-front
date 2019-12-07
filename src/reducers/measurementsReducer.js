import measurementService from '../services/measurements'

const measurementsReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_MEASUREMENTS':
      return action.data
    default:
      return state
  }
}

export const initializeMeasurements = user => {
  return async dispatch => {
    const measurements = await measurementService.getAll(user)
    dispatch({
      type: 'INIT_MEASUREMENTS',
      data: measurements.data,
    })
  }
}

export default measurementsReducer
