import React from 'react';
import styled from 'styled-components';
import history from '../utils/index';

const HeaderContainer = styled.div`
  background: #e8ecef;
  border-bottom: 1px solid black;
  line-height: 60px;
  @media (max-width: 768px) {
    line-height: 35px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const UpperRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  color: #274262;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const UserMetaWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.button`
  height: 23px;
  background: white;
  border: 2px solid #274262;
  border-radius: 3px;
  color: #274262;
  margin-left: 10px;
`;

const UserInfo = styled.div`
  font-family: 'Helvetica', sans-serif;
  color: #274262;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 8px;
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

type Props = {
  logout: () => {
    type: string;
    data: null;
  };
  user: string;
};

const Heading = ({ logout, user }: Props) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <UpperRowWrapper>
          <LinkWrapper href="/">
            <Title>Ruuvifrontend</Title>
          </LinkWrapper>
          {user && (
            <UserMetaWrapper>
              <UserInfo>Logged in as {user}</UserInfo>
              <HeaderButton onClick={() => logout()}>Logout</HeaderButton>
              <HeaderButton onClick={() => history.push('/settings')}>Settings</HeaderButton>
            </UserMetaWrapper>
          )}
        </UpperRowWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Heading;
