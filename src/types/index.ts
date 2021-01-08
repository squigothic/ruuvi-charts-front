import { Store } from 'redux';

export type User = {
  username: string;
  token: string;
};

export type Timeperiod = {
  beginning: string;
  end: string;
};

export type MeasurementData = {
  pressure?: number;
  temperature: number;
  humidity: number;
  timestamp: string;
  friendlyname: string;
};

export type Measurement = {
  user: string;
  timestamp_tag: string;
  data: MeasurementData;
  dateOfMeasurement: string;
};

export type Alert = {
  activated: boolean;
  triggered: boolean;
  value: number;
};

export type TagData = {
  tagName: string;
  mac: string;
  friendlyName: string;
  englishName: string;
  high: Alert;
  low: Alert;
};

export type NotificationState = {
  content: string;
  status: boolean;
};

export type RootState = {
  measurements: {
    recurring: Measurement[][];
    currentTimeperiod: Timeperiod;
    average: Measurement[];
  };
  user: User;
  notification: NotificationState;
  loading: {
    status: boolean;
    message: string;
  };
  tags: TagData[];
};

export type ChartHeaderData = {
  averageTemp: string;
  averageHum: string;
  lowestHum: number;
  lowestTemp: number;
  highestHum: number;
  highestTemp: number;
  latestHum: number;
  latestTemp: number;
  lowestTempTime: string | undefined;
  lowestHumTime: string | undefined;
  highestTempTime: string | undefined;
  highestHumTime: string | undefined;
};

export type LoadingStateReducerAction = {
  type: string;
  data: {
    status: boolean;
    message: string;
  };
};

export type UserReducerAction = {
  type: string;
  data: User | null;
};

export type MeasurementsReducerAction = {
  type: string;
  data: {
    measurements?: Measurement[][];
    averages?: Measurement[];
    timeperiod:
      | {
          beginning: string;
          end: string;
        }
      | string;
  };
};

export type NotificationReducerAction = {
  type: string;
  data: {
    content: string;
    status: boolean;
  };
};

export type TagReducerAction = {
  type: string;
  data: TagData[] | TagData;
};

export type AppState = Store<
  RootState,
  | LoadingStateReducerAction
  | UserReducerAction
  | MeasurementsReducerAction
  | NotificationReducerAction
  | TagReducerAction
>;
