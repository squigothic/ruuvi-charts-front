import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: #E8ECEF;
  height: 90px;
  line-height: 90px;
  margin-bottom: 20px;
`

const TitleWrapper = styled.div`
  width: 90%;
  margin: auto;
`
const Title = styled.h2`
  color: #274262;
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
`

const Heading = () => (
  <HeaderContainer>
    <TitleWrapper>
      <Title>Ruuvifrontend</Title>
    </TitleWrapper>
  </HeaderContainer>
)

export default Heading
