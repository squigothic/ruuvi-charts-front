import { LoadingStateReducerAction } from '../types';

const initialState = { status: false, message: '' };

const loadingStateReducer = (state = initialState, action: LoadingStateReducerAction) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return { ...state, status: action.data.status, message: action.data.message };
    default:
      return state;
  }
};

export const changeLoadingStatus = (status: boolean, message: string) => {
  return {
    type: 'CHANGE_STATE',
    data: {
      status,
      message,
    },
  };
};

export default loadingStateReducer;
