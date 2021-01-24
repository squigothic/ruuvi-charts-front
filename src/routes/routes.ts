import frontpage from './frontpage';
import settings from './settings';
import login from './login';
import logout from './logout';

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
  {
    path: '/logout',
    name: 'Logout',
    action: logout,
  },
];
