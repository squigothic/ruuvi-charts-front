import axios from 'axios';
import apiConfig from '../apiConfig';
import { TagData } from '../types';

let config:
  | {
      headers: { Authorization: string };
    }
  | {};

const tagsBaseUrl = `${apiConfig.baseUrl}/tags`;

export const setToken = (newToken: string) => {
  const token = `Bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

export const getTags = async (username: string) => {
  const response = await axios.get(`${tagsBaseUrl}/${username}`, config);
  return response;
};

export const updateTag = async (username: string, tag: TagData) => {
  const response = await axios({
    method: 'put',
    url: `${tagsBaseUrl}/${username}`,
    data: tag,
  });
  return response;
};

export const addTag = async (username: string, tag: TagData) => {
  const response = await axios({
    method: 'post',
    url: `${tagsBaseUrl}/${username}`,
    data: tag,
  });
  return response;
};
