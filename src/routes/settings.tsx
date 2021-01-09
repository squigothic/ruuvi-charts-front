import React from 'react';
import { RouterContext } from 'universal-router';
import Settings from '../components/settings/Settings';
import { setTags } from '../reducers/tagReducer';
import { getTags, setToken } from '../services/tagService';

const settings = async ({ store, loggedInUser }: RouterContext) => {
  setToken(loggedInUser.token);
  await store.dispatch(setTags(await getTags(loggedInUser.username)));
  return <Settings />;
};

export default settings;
