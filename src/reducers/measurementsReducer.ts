import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  setToken,
  getLatestMeasurements,
  getLatestAverages,
  getAverages,
  getTimeperiod,
} from '../services/measurementService';
import { changeLoadingStatus } from './loadingStateReducer';
import { logoutUser } from './userReducer';
import { showNotification } from './notificationReducer';
import {
  MeasurementsReducerAction,
  UserReducerAction,
  RootState,
  Timeperiod,
  LoadingStateReducerAction,
} from '../types';

const initialState = {
  recurring: [],
  currentTimeperiod: {
    beginning: '',
    end: '',
  },
  average: [],
};

const measurementsReducer = (state = initialState, action: MeasurementsReducerAction) => {
  switch (action.type) {
    case 'MEASUREMENTS_FETCH_SUCCESS':
      return {
        ...state,
        recurring: action.data.measurements,
        currentTimeperiod: action.data.timeperiod,
      };
    case 'AVERAGES_FETCH_SUCCESS':
      return {
        ...state,
        average: action.data.averages,
        currentTimeperiod: action.data.timeperiod,
      };
    default:
      return state;
  }
};

const handleMeasurementsActionError = (
  dispatch: ThunkDispatch<
    RootState,
    unknown,
    MeasurementsReducerAction | LoadingStateReducerAction | UserReducerAction
  >,
  error: any
) => {
  dispatch(changeLoadingStatus(false, ''));
  console.log('response error', error);
  dispatch(logoutUser());
  dispatch(showNotification('An error occurred, try logging in again', 4));
};

export const initializeMeasurements = (
  username: string
): ThunkAction<
  void,
  RootState,
  unknown,
  MeasurementsReducerAction | LoadingStateReducerAction | UserReducerAction
> => {
  return async (dispatch, getState) => {
    try {
      dispatch(changeLoadingStatus(true, 'Loading measurements...'));

      const {
        user: { token },
      } = getState();
      setToken(token);

      const [recurringMeasurements, averageMeasurements] = await Promise.all([
        getLatestMeasurements(username),
        getLatestAverages(username),
      ]);

      if (recurringMeasurements.status !== 200 || averageMeasurements.status !== 200) {
        throw new Error('Something went wrong with the request');
      }
      dispatch({
        type: 'MEASUREMENTS_FETCH_SUCCESS',
        data: {
          measurements: recurringMeasurements.data,
          timeperiod: 'Last 24 hours',
        },
      });
      dispatch({
        type: 'AVERAGES_FETCH_SUCCESS',
        data: {
          averages: averageMeasurements.data,
          timeperiod: 'Last 24 hours',
        },
      });
      dispatch(changeLoadingStatus(false, ''));
      return Promise.resolve();
    } catch (error) {
      handleMeasurementsActionError(dispatch, error);
      return Promise.reject();
    }
  };
};

export const getTimeperiodData = (
  timeperiod: Timeperiod
): ThunkAction<
  void,
  RootState,
  unknown,
  MeasurementsReducerAction | LoadingStateReducerAction | UserReducerAction
> => {
  return async (dispatch, getState) => {
    dispatch(changeLoadingStatus(true, 'Loading measurements...'));
    const {
      user: { username },
    } = getState();
    try {
      const measurements = await getTimeperiod(timeperiod, username);
      if (measurements.status !== 200) {
        throw new Error('Something went wrong with the request');
      }
      dispatch({
        type: 'MEASUREMENTS_FETCH_SUCCESS',
        data: {
          measurements: measurements.data,
          timeperiod,
        },
      });
      dispatch(changeLoadingStatus(false, ''));
    } catch (error) {
      handleMeasurementsActionError(dispatch, error);
    }
  };
};

export const getAverageForTimeperiod = (
  timeperiod: Timeperiod
): ThunkAction<void, RootState, unknown, MeasurementsReducerAction | LoadingStateReducerAction> => {
  return async (dispatch, getState) => {
    dispatch(changeLoadingStatus(true, 'Loading averages...'));
    const {
      user: { username },
    } = getState();
    try {
      const averages = await getAverages(timeperiod, username);
      if (averages.status !== 200) {
        throw new Error('Something went wrong with the request');
      }
      dispatch({
        type: 'AVERAGES_FETCH_SUCCESS',
        data: {
          averages: averages.data,
          timeperiod,
        },
      });
      dispatch(changeLoadingStatus(false, ''));
    } catch (error) {
      handleMeasurementsActionError(dispatch, error);
    }
  };
};

export default measurementsReducer;
