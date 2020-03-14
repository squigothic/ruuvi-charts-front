import React from 'react'
import styled from 'styled-components'

const ExtraInfoWrapper = styled.div`
  color: #4e4e4e;
  font-size: 13px;
  line-height: 21px;
  font-family: helvetica;
  font-weight: 550;
  border-left: 4px solid #274262;
`

const LineWrapper = styled.div`
  margin-left: 10px;
`

const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 5px;
`

const ExtraInfo = ({ data }) => (
  <ExtraInfoWrapper>
    <LineWrapper>
      Averages for selected timeperiod:
      <HiliteNumber color="#e55977">{data.averageTemp} &deg;C</HiliteNumber>
      |
      <HiliteNumber color="#2d5e84">{data.averageHum} %</HiliteNumber>
    </LineWrapper>
    <LineWrapper>
      Minimums for selected timeperiod:
      <HiliteNumber color="#e55977">{data.lowestTemp} &deg;C</HiliteNumber>
      |
      <HiliteNumber color="#2d5e84">{data.lowestHum} %</HiliteNumber>
    </LineWrapper>
    <LineWrapper>
      Maximums for selected timeperiod:
      <HiliteNumber color="#e55977">{data.highestTemp} &deg;C</HiliteNumber>
      |
      <HiliteNumber color="#2d5e84">{data.highestHum} %</HiliteNumber>
    </LineWrapper>

  </ExtraInfoWrapper >
)

export default ExtraInfo
