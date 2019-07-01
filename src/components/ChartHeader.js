import React, { useState } from 'react'
import styled from 'styled-components'
import ExtraInfo from './Togglable'

const ChartHeaderWrapper = styled.div`
  padding: 0.5em 0em;
  border-bottom: 2px solid #3089AF;
  margin-bottom: 10px;
`

const ChartTitle = styled.h4`
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  margin-bottom: 0.1em;
  margin-top:0;
  margin-right: 0.2em;
  color: #3089AF;
  font-family: helvetica;
`

const LatestData = styled.div`
  color: #4e4e4e;
  font-family: monospace;
  font-weight: 550;
`
const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 5px;
`

const ChartHeader = ({ name, latestHum, latestTemp }) => {

  const [togglable, setTogglable] = useState(true)

  return (
    <ChartHeaderWrapper>
      <ChartTitle>{name}</ChartTitle>
      <LatestData>
        Temperature:
      <HiliteNumber color='#e55977'>
          {latestTemp}
        </HiliteNumber>
        Humidity:
      <HiliteNumber color='#2d5e84'>{latestHum}</HiliteNumber>
        {togglable && <ExtraInfo />}
      </LatestData>
    </ChartHeaderWrapper>
  )
}

export default ChartHeader
