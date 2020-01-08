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
  flex-direction: column;
  justify-content: space-between;
  background-color: #e8ecef;
  padding: 5px 0 5px 5px;
`

const ChartTitle = styled.h4`
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  margin: 5px 5px 2px 0;
  padding-left: 5px;
  color: #3089af;
  font-family: helvetica;
`

const LatestData = styled.div`
  color: #4e4e4e;
  font-size: 13px;
  line-height: 20px;
  font-family: helvetica;
  font-weight: 550;
  
`
const InfoLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
`

const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 15px;
`

const ToggleButton = styled.div`
  font-size: 12px;
  padding-left: 20px;
  display: inline-block;
  line-height: 20px;
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
        <InfoLineWrapper>
          <LatestData>
            Temperature:
          <HiliteNumber color="#e55977">{latestTemp} &deg;C</HiliteNumber>
            Humidity:
          <HiliteNumber color="#2d5e84">{latestHum} %</HiliteNumber>

          </LatestData>
          <ToggleButton onClick={handleClick}>
            {togglable ? '▲' : '▼'}
          </ToggleButton>
        </InfoLineWrapper>
        {togglable && (
          <ExtraInfo averageTemp={averageTemp} averageHum={averageHum} />
        )}
      </ChartDataWrapper>
      <TimescaleSelector setTimescale={setTimescale} />
    </ChartHeaderWrapper>
  )
}

export default ChartHeader
