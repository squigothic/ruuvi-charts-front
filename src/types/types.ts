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
