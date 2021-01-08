import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  background-color: cyan;
`;

const Title = styled.h1`
  color: #274262;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Settings = () => {
  return (
    <Wrapper>
      <Title>Settings</Title>
    </Wrapper>
  );
};

export default Settings;
