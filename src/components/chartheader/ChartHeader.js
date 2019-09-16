import React, { useState } from 'react'
import styled from 'styled-components'
import ExtraInfo from './Togglable'
import TimescaleSelector from './TimescaleSelector'

const ChartHeaderWrapper = styled.div`
  padding: 0.1em 0em;
  border-bottom: 2px solid #3089af;
  margin-bottom: 10px;
`

const ChartDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChartTitle = styled.h4`
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  margin-bottom: 0.1em;
  margin-top: 0;
  margin-right: 0.2em;
  color: #3089af;
  font-family: helvetica;
`

const LatestData = styled.div`
  color: #4e4e4e;
  font-size: 15px;
  line-height: 20px;
  font-family: monospace;
  font-weight: 550;
`
const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 5px;
`

const ToggleButton = styled.div`
  font-size: 12px;
  padding-left: 20px;
  display: inline-block;
`

const ChartHeader = ({
  name,
  latestHum,
  latestTemp,
  averageTemp,
  averageHum,
  setTimescale,
}) => {
  const [togglable, setTogglable] = useState(false)

  const handleClick = () => {
    setTogglable(!togglable)
  }

  return (
    <ChartHeaderWrapper>
      <ChartTitle>{name}</ChartTitle>
      <ChartDataWrapper>
        <LatestData>
          Temperature:
          <HiliteNumber color="#e55977">{latestTemp}</HiliteNumber>
          Humidity:
          <HiliteNumber color="#2d5e84">{latestHum}</HiliteNumber>
          <ToggleButton onClick={handleClick}>
            {togglable ? '▲' : '▼'}
          </ToggleButton>
          {togglable && (
            <ExtraInfo averageTemp={averageTemp} averageHum={averageHum} />
          )}
        </LatestData>
      </ChartDataWrapper>
      <TimescaleSelector setTimescale={setTimescale} />
    </ChartHeaderWrapper>
  )
}

export default ChartHeader