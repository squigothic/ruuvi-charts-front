import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: #E8ECEF;
  border-bottom: 1px solid black;
  line-height: 60px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`
const UpperRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`

const Title = styled.h2`
  color: #274262;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    font-size: 24px;
  }  
`

const UserMetaWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoutButton = styled.button`
  height: 23px;
  background: white;
  border: 2px solid #274262;
  border-radius: 3px;
  color: #274262;
`

const UserInfo = styled.div`
  margin-right: 15px;
  font-family: 'Helvetica', sans-serif;
  color: #274262;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 8px;
  }  
`

const Heading = ({ logout, username }) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <UpperRowWrapper>
          <Title>Ruuvifrontend</Title>
          <UserMetaWrapper>
            <UserInfo>Logged in as {username}</UserInfo>
            <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
          </UserMetaWrapper>
        </UpperRowWrapper>
      </ContentWrapper>
    </HeaderContainer>
  )
}

export default Heading
