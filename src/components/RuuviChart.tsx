import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState, MeasurementData } from '../types/types'
import Chart from './Chart'
import ChartHeader from './chartheader/ChartHeader'

const ChartWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`
type Props = {
  recurringMeasurements: MeasurementData[]
  tagFriendlyName: string;
}

const RuuviChart = ({ recurringMeasurements, tagFriendlyName }: Props) => {
  const [timeScale, setTimescale] = useState(24)
  const [selectedView, setSelectedView] = useState<'recurring' | 'average'>('recurring')
  const averageMeasurements = useSelector((state: RootState) =>
    state.measurements.average.filter(m => m.data.friendlyname === tagFriendlyName).map(m => m.data)
  )

  const changeView = (selection: 'recurring' | 'average') => {
    if (selection === 'recurring') {
      setSelectedView('recurring')
    } else {
      setSelectedView('average')
    }
  }
  const calculateHeaderData = (currentData: MeasurementData[]) => {
    const latestTemp = currentData[currentData.length - 1].temperature
    const latestHum = currentData[currentData.length - 1].humidity
    const averageTemp = (currentData.map(t => t.temperature).reduce((a, b) => a + b) / currentData.length).toPrecision(4)
    const averageHum = (currentData.map(t => t.humidity).reduce((a, b) => a + b) / currentData.length).toPrecision(4)
    const lowestTemp = Math.min(...currentData.map(t => t.temperature))
    const lowestHum = Math.min(...currentData.map(t => t.humidity))
    const highestTemp = Math.max(...currentData.map(t => t.temperature))
    const highestHum = Math.max(...currentData.map(t => t.humidity))
    const lowestTempTime = currentData.find(t => Number(t.temperature) === lowestTemp)?.timestamp
    const lowestHumTime = currentData.find(t => Number(t.humidity) === lowestHum)?.timestamp
    const highestTempTime = currentData.find(t => Number(t.temperature) === highestTemp)?.timestamp
    const highestHumTime = currentData.find(t => Number(t.humidity) === highestHum)?.timestamp
    return { averageTemp, averageHum, lowestHum, lowestTemp, highestHum, highestTemp, latestHum, latestTemp, lowestTempTime, lowestHumTime, highestTempTime, highestHumTime }
  }

  if (timeScale !== 24) {
    const currentTime = new Date(Number.parseInt(recurringMeasurements[recurringMeasurements.length - 1].timestamp) * 1000)
    const beginTime = currentTime.getTime() / 1000 - timeScale * 3600
    recurringMeasurements = recurringMeasurements.filter(measurement => Number.parseInt(measurement.timestamp) > beginTime)
  }

  return (
    <ChartWrapper>
      <ChartHeader
        name={tagFriendlyName}
        data={calculateHeaderData(selectedView === 'recurring' ? recurringMeasurements : averageMeasurements)}
        setTimescale={setTimescale}
        changeView={changeView}
        selectedView={selectedView}
      />
      <Chart measurements={selectedView === 'recurring' ? recurringMeasurements : averageMeasurements} />
    </ChartWrapper>
  )
}

export default RuuviChart
