import axios from 'axios';

const baseUrl = 'https://dry-ocean-51491.herokuapp.com/login';
// const baseUrl = 'https://nameless-river-83647.herokuapp.com/login';

const login = async ({ username, password }: { username: string; password: string }) => {
  const response = await axios({ method: 'post', url: baseUrl, data: { username, password } });
  return response;
};

export default login;
