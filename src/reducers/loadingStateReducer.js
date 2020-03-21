const initialState = { status: false, message: '' }

const loadingStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return { ...state, status: action.data.status, message: action.data.message }
    default:
      return state
  }
}

export const changeLoadingStatus = (status, message) => {
  return {
    type: 'CHANGE_STATE',
    data: {
      status,
      message
    }
  }
}

export default loadingStateReducer
