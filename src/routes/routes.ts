import frontpage from './frontpage';
import settings from './settings';
import login from './login';

export default [
  {
    path: '',
    name: 'Frontpage',
    action: frontpage,
  },
  {
    path: '/settings',
    name: 'Settings',
    action: settings,
  },
  {
    path: '/login',
    name: 'Login',
    action: login,
  },
];
