import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: #E8ECEF;
  height: 90px;
  line-height: 90px;
  margin-bottom: 20px;
`

const TitleWrapper = styled.div`
  margin: 0 20px;
  display: inline-block;
`
const Title = styled.h2`
  color: #274262;
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    font-size: 30px;
  }  
`

const ButtonWrapper = styled.div`
  float: right;
  margin-right: 20px;
`

const Heading = ({ logout }) => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <Title>Ruuvifrontend</Title>
      </TitleWrapper>
      <ButtonWrapper><button onClick={() => logout()}>Change user</button></ButtonWrapper>
    </HeaderContainer>
  )
}

export default Heading
