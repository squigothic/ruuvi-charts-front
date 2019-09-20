import React from 'react'
import styled from 'styled-components'

const ExtraInfoWrapper = styled.div`
  margin-top: 5px;
  color: #4e4e4e;
  font-size: 13px;
  line-height: 20px;
  font-family: helvetica;
  font-weight: 550;
`

const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 5px;
`

const ExtraInfo = ({ averageTemp, averageHum }) => (
  <ExtraInfoWrapper>
    Averages(24h):
    <HiliteNumber color="#e55977">{averageTemp} &deg;C</HiliteNumber>
    |
    <HiliteNumber color="#2d5e84">{averageHum} %</HiliteNumber>
  </ExtraInfoWrapper>
)

export default ExtraInfo
