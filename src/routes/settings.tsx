import React from 'react';
import Settings from '../components/settings/Settings';

export default async function action() {
  console.log('runnign settings things.');
  return <Settings />;
}
