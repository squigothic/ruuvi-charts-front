import axios from 'axios';
import { Timeperiod } from '../types';
import apiConfig from '../apiConfig';

let token: string;

const measurementsBaseUrl = `${apiConfig.baseUrl}/measurements`;

export const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

export const getTimeperiod = async (timePeriod: Timeperiod, username: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${measurementsBaseUrl}/${username}`, timePeriod, config);
  return response;
};

export const getAverages = async (timePeriod: Timeperiod, username: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(
    `${measurementsBaseUrl}/${username}/averages`,
    timePeriod,
    config
  );
  return response;
};

export const getLatestMeasurements = async (username: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.get(`${measurementsBaseUrl}/${username}`, config);
  return response;
};

export const getLatestAverages = async (username: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.get(`${measurementsBaseUrl}/${username}/averages`, config);
  return response;
};
