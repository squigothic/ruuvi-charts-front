import React from 'react'
import styled from 'styled-components'
import { ChartHeaderData } from '../../types/types'
import {Title} from './ChartHeader'

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
  display: flex;
  flex-direction: column;
  min-width: 130px;
`
const HiliteNumber = styled.span`
  color: ${props => props.color};
  margin-right: 5px;
`
const DataItem = styled.div`
  
`
type Props = {
  data: ChartHeaderData;
  selectedView: "recurring" | "average";
}


const ExtraInfo = ({ data, selectedView }: Props) => {
  const formatTime = (timestamp: string | undefined) => {
    const date = new Date(Number(timestamp) * 1000)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const hour = ("0" + date.getHours()).slice(-2)
    const minute = ("0" + date.getMinutes()).slice(-2)
    return selectedView === 'recurring' ? day + '.' + month + '. ' + hour + ':' + minute : day + '.' + month + '.'
  }

  return (
  <ExtraInfoWrapper>
    
    <DataWrapper>
        <Title size='14px'>Minimum</Title>
      <DataItem>
          <HiliteNumber color="#e55977">{data.lowestTemp} &deg;C</HiliteNumber> {formatTime(data.lowestTempTime)}
        </DataItem>
        <DataItem>
          <HiliteNumber color="#2d5e84">{data.lowestHum} %</HiliteNumber> {formatTime(data.lowestHumTime)}
        </DataItem>
    </DataWrapper>
    <DataWrapper>
        <Title size='14px'>Maximum</Title>
           <DataItem>
          <HiliteNumber color="#e55977">{data.highestTemp} &deg;C</HiliteNumber> {formatTime(data.highestTempTime)}
        </DataItem>
        <DataItem>
          <HiliteNumber color="#2d5e84">{data.highestHum} %</HiliteNumber> {formatTime(data.highestHumTime)}
          </DataItem>
      </DataWrapper>
      <DataWrapper>
      <Title size='14px'>Average</Title>
      <HiliteNumber color="#e55977">{data.averageTemp} &deg;C</HiliteNumber>
      <HiliteNumber color="#2d5e84">{data.averageHum} %</HiliteNumber>
    </DataWrapper>

    </ExtraInfoWrapper >
  )
}

export default ExtraInfo
