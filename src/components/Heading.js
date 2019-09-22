import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: #E8ECEF;
  border-bottom: 1px solid black;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const TitleWrapper = styled.div`

`
const Title = styled.h2`
  color: #274262;
  font-size: 32px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    font-size: 24px;
  }  
`

const ButtonWrapper = styled.div`
  float: right;
`

const Heading = ({ logout }) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <TitleWrapper>
          <Title>Ruuvifrontend</Title>
        </TitleWrapper>
        <ButtonWrapper><button onClick={() => logout()}>Change user</button></ButtonWrapper>
      </ContentWrapper>
    </HeaderContainer>
  )
}

export default Heading
