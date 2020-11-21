import settings from './settings';

export default [
  {
    path: '',
    name: 'Frontpage',
    action: () => console.log('uliuli'),
  },
  {
    path: '/settings',
    name: 'Settings',
    action: settings,
  },
];
