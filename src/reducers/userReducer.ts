import { ThunkAction } from 'redux-thunk';
import login from '../services/loginservice';
import { changeLoadingStatus } from './loadingStateReducer';
import { showNotification } from './notificationReducer';
import { LoadingStateReducerAction, UserReducerAction, RootState, User } from '../types';
import history from '../utils';

const userReducer = (state = null, action: UserReducerAction) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...action.data, isLoggingIn: false };
    case 'SET_USER':
      return action.data;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
};

export const loginUser = (credentials: {
  username: string;
  password: string;
}): ThunkAction<void, RootState, unknown, UserReducerAction | LoadingStateReducerAction> => {
  return async (dispatch) => {
    try {
      dispatch(changeLoadingStatus(true, 'Logging in...'));
      const response = await login(credentials);
      const user = { username: response.data.username, token: response.data.token };
      dispatch({
        type: 'LOGIN_USER',
        data: user,
      });
      window.localStorage.setItem('user', JSON.stringify(user));
      console.log('yriteätän repleissata...');
      history.replace('/');
    } catch (error) {
      dispatch(changeLoadingStatus(false, ''));
      console.log('response error');
      console.log(error.response.status);
      dispatch(showNotification('Wrong username or password', 4));
    }
  };
};

export const logoutUser = (): { type: string; data: null } => {
  console.log('logataan ulos');
  window.localStorage.clear();
  history.replace('/login');
  return {
    type: 'LOGOUT_USER',
    data: null,
  };
};

export const setUser = (user: User): { type: string; data: User } => {
  return {
    type: 'SET_USER',
    data: user,
  };
};

export default userReducer;
