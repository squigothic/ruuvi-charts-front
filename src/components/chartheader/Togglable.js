import React from 'react'
import styled from 'styled-components'

const ExtraInfoWrapper = styled.div`
  color: #4e4e4e;
  font-size: 13px;
  line-height: 21px;
  font-family: helvetica;
  font-weight: 550;
  border-left: 4px solid #274262;
  display: flex;
  @media (max-width: 768px) {
    font-size: 12px;
  }  
`

const DataWrapper = styled.div`
  margin-left: 10px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
`

const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-right: 5px;
`
const DataItem = styled.div`
  
`

const Title = styled.h4`
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
`

const ExtraInfo = ({ data }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000)
    console.log(date)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const hour = ("0" + date.getHours()).slice(-2)
    const minute = ("0" + date.getMinutes()).slice(-2)
    return day + '.' + month + '. ' + hour + ':' + minute 
  }

  return (
  <ExtraInfoWrapper>
    <DataWrapper>
      <Title>Average</Title>
      <HiliteNumber color="#e55977">{data.averageTemp} &deg;C</HiliteNumber>
      <HiliteNumber color="#2d5e84">{data.averageHum} %</HiliteNumber>
    </DataWrapper>
    <DataWrapper>
        <Title>Minimum</Title>
      <DataItem>
          <HiliteNumber color="#e55977">{data.lowestTemp} &deg;C</HiliteNumber> {formatTime(data.lowestTempTime)}
        </DataItem>
        <DataItem>
          <HiliteNumber color="#2d5e84">{data.lowestHum} %</HiliteNumber> {formatTime(data.lowestHumTime)}
        </DataItem>
    </DataWrapper>
    <DataWrapper>
        <Title>Maximum</Title>
           <DataItem>
          <HiliteNumber color="#e55977">{data.highestTemp} &deg;C</HiliteNumber> {formatTime(data.highestTempTime)}
        </DataItem>
        <DataItem>
          <HiliteNumber color="#2d5e84">{data.highestHum} %</HiliteNumber> {formatTime(data.highestHumTime)}
          </DataItem>
    </DataWrapper>

    </ExtraInfoWrapper >
  )
}

export default ExtraInfo
