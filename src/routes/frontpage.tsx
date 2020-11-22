import React from 'react';

import { RouterContext } from 'universal-router';
import Frontpage from '../components/frontpage/Frontpage';
import { initializeMeasurements } from '../reducers/measurementsReducer';

const frontpage = async ({ store, loggedInUser }: RouterContext) => {
  await store.dispatch(initializeMeasurements(loggedInUser.username));
  return <Frontpage />;
};

export default frontpage;
