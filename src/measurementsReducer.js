import measurementService from './services/measurements'

const measurementsReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_MEASUREMENTS':
      return action.data
    default:
      return state
  }
}

export const initializeMeasurements = () => {
  return async dispatch => {
    const measurements = await measurementService.getAll()
    dispatch({
      type: 'INIT_MEASUREMENT',
      data: measurements,
    })
  }
}

export default measurementsReducer
