import axios from 'axios';
import apiConfig from '../apiConfig';
import { TagData } from '../types';

type Config =
  | {
      headers: { Authorization: string };
    }
  | {};

let config: Config;

const tagsBaseUrl = `${apiConfig.baseUrl}/tags`;

export const setToken = (newToken: string) => {
  const token = `Bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

export const getTags = async (username: string) => {
  const response = await axios.get(`${tagsBaseUrl}/${username}`, config);
  return response.data;
};

export const updateTag = async (username: string, tag: TagData, tagName: String) => {
  const response = await axios.post(`${tagsBaseUrl}/${username}/${tagName}`, tag, config);
  return response.data;
};

export const addTag = async (username: string, tag: TagData) => {
  const response = await axios.post(`${tagsBaseUrl}/${username}`, tag, config);
  return response.data;
};
