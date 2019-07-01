import React from 'react'
import styled from 'styled-components'

const ExtraInfoWrapper = styled.div`
  height: 40px;
  background: blue;
`

const ExtraInfo = () => (
  <ExtraInfoWrapper>
    <p>This is extra info</p>
  </ExtraInfoWrapper>
)

export default ExtraInfo
