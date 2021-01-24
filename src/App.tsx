import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Heading from './components/Heading';
import Loading from './components/Loading';
import { logoutUser, setUser } from './reducers/userReducer';
import { RootState } from './types';

const PageWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const App = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    const savedUser = window.localStorage.getItem('user');
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const doLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  return (
    <PageWrapper>
      <Heading logout={doLogout} user={user?.username} />
      {loading.status ? <Loading text={loading.message} /> : children}
    </PageWrapper>
  );
};

export default App;
