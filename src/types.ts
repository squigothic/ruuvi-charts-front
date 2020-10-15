export type RootState = {
  measurements: {
    recurring: Measurement[],
    currentTimeperiod: string;
    average: Measurement[]
  },
  user: {
    username: string,
    token: string;
  },
  notification: {
    content: string,
    status: boolean
  },
  loading: {
    status: boolean,
    message: string
  },
}

export type Measurement = {
  user: string;
  timestamp_tag: string;
  data: {
    temperature: number;
    humidity: number;
    timestamp: number;
    friendlyname: string;
  },
  dateOfMeasurement: string;
}
