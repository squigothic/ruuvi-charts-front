import axios from 'axios';
import { Timeperiod } from '../types/types';
import apiConfig from '../apiConfig';

let token: string;

const measurementsBaseUrl = `${apiConfig.baseUrl}/measurements`;

export const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

export const getTimeperiod = async (timePeriod: Timeperiod, user: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${measurementsBaseUrl}/${user}`, timePeriod, config);
  return response;
};

export const getAverages = async (timePeriod: Timeperiod, user: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${measurementsBaseUrl}/${user}/averages`, timePeriod, config);
  return response;
};

export const getLatestMeasurements = async (user: string) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.get(`${measurementsBaseUrl}/${user}`, config);
  return response;
};

export const getLatestAverages = async (user: string) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log('GETTING AVERAGES *****');

  const response = await axios.get(`${measurementsBaseUrl}/${user}/averages`, config);
  return response;
};
