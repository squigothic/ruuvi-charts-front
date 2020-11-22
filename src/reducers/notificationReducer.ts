import { ThunkAction } from 'redux-thunk';
import { RootState, NotificationReducerAction } from '../types';

const initialState = {
  content: '',
  status: false,
};

const notificationReducer = (state = initialState, action: NotificationReducerAction) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { content: action.data.content, status: action.data.status };
    case 'HIDE_NOTIFICATION':
      return { content: action.data.content, status: action.data.status };
    default:
      return state;
  }
};

export const showNotification = (
  messageToShow: string,
  timeout: number
): ThunkAction<void, RootState, unknown, NotificationReducerAction> => {
  return async (dispatch) => {
    setTimeout(
      () =>
        dispatch({
          type: 'HIDE_NOTIFICATION',
          data: {
            content: '',
            status: false,
          },
        }),
      timeout * 1000
    );
    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: {
        content: messageToShow,
        status: true,
      },
    });
  };
};

export default notificationReducer;
