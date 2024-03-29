import axios from 'axios';
import apiConfig from '../apiConfig';

const { baseUrl } = apiConfig;

const login = async ({ username, password }: { username: string; password: string }) => {
  const response = await axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: { username, password },
  });
  return response;
};

export default login;
