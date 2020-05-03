import React, { useState } from 'react'
import styled from 'styled-components'
import ExtraInfo from './Togglable'
import TimescaleSelector from './TimescaleSelector'
import ChartSelectionTabs from './ChartSelectionTabs'

const ChartHeaderWrapper = styled.div`
  padding: 0.1em 0em;
  border-bottom: 2px solid #3089af;
  margin-bottom: 10px;
`

const TitleRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChartDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e8ecef;
  padding: 5px 0 0px 5px;
`

const ChartTitle = styled.h4`
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  margin: 5px 5px 2px 0;
  padding-left: 5px;
  color: #274262;
  font-family: helvetica;
`

const LatestData = styled.div`
  color: #4e4e4e;
  font-size: 15px;
  line-height: 20px;
  font-family: helvetica;
  font-weight: 550;
  @media (max-width: 768px) {
    font-size: 12px;
  }  
  
`
const InfoLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 5px;
`

const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }  
`

const ToggleButton = styled.div`
  font-size: 12px;
  padding-left: 20px;
  display: inline-block;
  line-height: 20px;
  font-family: helvetica;
`

const ChartHeader = ({
  name,
  data,
  setTimescale,
  changeView
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <ChartHeaderWrapper>
      <TitleRowWrapper>
      <ChartTitle>{name}</ChartTitle>
      <ChartSelectionTabs changeView={changeView} />
      </TitleRowWrapper>
      <ChartDataWrapper>
        <InfoLineWrapper>
          <LatestData>
            Temperature:
          <HiliteNumber color="#e55977">{data.latestTemp} &deg;C</HiliteNumber>
            Humidity:
          <HiliteNumber color="#2d5e84">{data.latestHum} %</HiliteNumber>

          </LatestData>
          <ToggleButton onClick={handleClick}>
            {expanded ? ' Show less ▲' : 'Show more ▼'}
          </ToggleButton>
        </InfoLineWrapper>
        {expanded && (
          <ExtraInfo data={data} />
        )}
      </ChartDataWrapper>
      <TimescaleSelector setTimescale={setTimescale} />
    </ChartHeaderWrapper>
  )
}

export default ChartHeader
