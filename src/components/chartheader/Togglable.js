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

const ExtraInfo = ({ averageTemp, averageHum }) => (
  <ExtraInfoWrapper>
    Averages(24h):
    <HiliteNumber color="#e55977">{averageTemp}</HiliteNumber>
    |
    <HiliteNumber color="#2d5e84">{averageHum}</HiliteNumber>
  </ExtraInfoWrapper>
)

export default ExtraInfo
