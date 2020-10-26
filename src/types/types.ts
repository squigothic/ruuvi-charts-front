export type RootState = {
  measurements: {
    recurring: Measurement[][],
    currentTimeperiod: Timeperiod;
    average: Measurement[]
  },
  user: User;
  notification: NotificationState;
  loading: {
    status: boolean,
    message: string
  },
}

export type NotificationState = {
  content: string;
  status: boolean;
}

export type User = {
  username: string,
  token: string;
}

export type LoadingStateReducerAction = {
  type: string
  data: {
    status: boolean;
    message: string;
  }
}

export type Timeperiod = {
  beginning: string;
  end: string;
}

export type Measurement = {
  user: string;
  timestamp_tag: string;
  data: MeasurementData;
  dateOfMeasurement: string;
}

export type MeasurementData = {
  pressure?: number;
  temperature: number;
  humidity: number;
  timestamp: string;
  friendlyname: string;
}
