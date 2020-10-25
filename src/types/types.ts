export type RootState = {
  measurements: {
    recurring: Measurement[][],
    currentTimeperiod: {
      beginning: string;
      end: string;
    };
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
