import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import RuuviChart from './components/RuuviChart';
import Heading from './components/Heading';
import Loading from './components/Loading';
import Login from './components/Login';
import Datedisplay from './components/timepicker/Datedisplay';
import { loginUser, logoutUser, setUser } from './reducers/userReducer';
import { RootState } from './types/types';

const PageWrapper = styled.div``;

const MainContent = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const measurements = useSelector((state: RootState) => state.measurements.recurring);
  const currentTimeperiod = useSelector((state: RootState) => state.measurements.currentTimeperiod);
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    const savedUser = window.localStorage.getItem('user');
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const doLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);
  const doLogin = useCallback(() => dispatch(loginUser(user)), [dispatch]);

  if (user === null) {
    if (loading.status === true) {
      return <Loading text={loading.message} />;
    }
    return <Login login={doLogin} />;
  }

  return (
    <PageWrapper>
      <Heading logout={doLogout} user={user?.username} />
      {!measurements || loading.status ? (
        <Loading text={loading.message} />
      ) : (
        <>
          <Datedisplay currentTimeperiod={currentTimeperiod} />
          <MainContent>
            {measurements.map((tag) => (
              <RuuviChart
                key={tag[0].data.friendlyname}
                recurringMeasurements={tag.map((measurement) => measurement.data)}
                tagFriendlyName={tag[tag.length - 1].data.friendlyname}
              />
            ))}
          </MainContent>
        </>
      )}
    </PageWrapper>
  );
};

export default App;
