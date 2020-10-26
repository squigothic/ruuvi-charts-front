import {LoadingStateReducerAction} from '../types/types'

const initialState = { status: false, message: '' }

const loadingStateReducer = (state = initialState, action: LoadingStateReducerAction) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return { ...state, status: action.data.status, message: action.data.message }
    default:
      return state
  }
}

export const changeLoadingStatus = (status: boolean, message: string) => {
  console.log('changing loading status... ', status)
  return {
    type: 'CHANGE_STATE',
    data: {
      status,
      message
    }
  }
}

export default loadingStateReducer
