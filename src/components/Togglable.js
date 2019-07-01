import React from 'react'
import styled from 'styled-components'

const ExtraInfoWrapper = styled.div`
  margin-top: 5px;
`

const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 5px;
`

const ExtraInfo = ({ averageTemp }) => (
  <ExtraInfoWrapper>

    Average (24h):<HiliteNumber color='#e55977'>{averageTemp}</HiliteNumber>
  </ExtraInfoWrapper>
)

export default ExtraInfo
