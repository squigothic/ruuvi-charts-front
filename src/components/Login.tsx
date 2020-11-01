import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './Notification';
import { loginUser } from '../reducers/userReducer';
import { RootState } from '../types/types';

const Wrapper = styled.div`
  background: lightgray;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20% 0 20%;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const InputDescription = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 18px;
`;

const Login = () => {
  const [newUser, setNewUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.notification);

  const submitUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      loginUser({
        username: newUser.toLowerCase(),
        password,
      })
    );
    setNewUser('');
    setPassword('');
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'username':
        setNewUser(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      {notification.status === true && <Notification message={notification.content} />}
      <LoginBox>
        <form onSubmit={(event) => submitUser(event)}>
          <InputDescription>Username</InputDescription>
          <input
            type="text"
            name="username"
            value={newUser}
            onChange={handleFormChange}
            onClick={() => newUser === 'insert username...' && setNewUser('')}
          />
          <InputDescription>Password</InputDescription>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleFormChange}
            onClick={() => password === 'insert password...' && setPassword('')}
          />
          <ButtonWrapper>
            <button type="submit">Login</button>
          </ButtonWrapper>
        </form>
      </LoginBox>
    </Wrapper>
  );
};

export default Login;
