import axios from 'axios';
import { User } from '../types/types';

const baseUrl = 'https://dry-ocean-51491.herokuapp.com/login';
// const baseUrl = 'https://nameless-river-83647.herokuapp.com/login';

const login = async (user: User) => {
  console.log('credentials: ', user);
  const response = await axios.post(baseUrl, user);
  return response;
};

export default login;
