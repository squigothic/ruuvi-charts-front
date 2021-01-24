import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loading from './Loading';
import { logoutUser } from '../reducers/userReducer';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
  }, []);
  return <Loading text="Logging out" />;
};

export default Logout;
