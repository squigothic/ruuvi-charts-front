import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Chart from './Chart'
import ChartHeader from './chartheader/ChartHeader'

const ChartWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`
const RuuviChart = ({ recurringMeasurements, tagFriendlyName }) => {
  const [timeScale, setTimescale] = useState(24)
  const [selectedView, setSelectedView] = useState('recurring')
  const averageMeasurements = useSelector(({ measurements }) => {
    const datas = measurements.average.map(measurement => JSON.parse(measurement.data))
    return datas.filter(m => m.friendlyname === tagFriendlyName)
  })

  const changeView = selection => {
    if (selection === 'recurring') {
      setSelectedView('recurring')
    } else {
      setSelectedView('average')
    }
  }

  const calculateHeaderData = currentData => {
    const latestTemp = currentData[currentData.length - 1].temperature
    const latestHum = currentData[currentData.length - 1].humidity
    const averageTemp = (currentData.map(t => t.temperature).reduce((a, b) => Number.parseFloat(a) + Number.parseFloat(b)) / currentData.length).toPrecision(4)
    const averageHum = (currentData.map(t => t.humidity).reduce((a, b) => Number.parseFloat(a) + Number.parseFloat(b)) / currentData.length).toPrecision(4)
    const lowestTemp = Math.min(...currentData.map(t => t.temperature))
    const lowestHum = Math.min(...currentData.map(t => t.humidity))
    const highestTemp = Math.max(...currentData.map(t => t.temperature))
    const highestHum = Math.max(...currentData.map(t => t.humidity))
    const lowestTempTime = currentData.find(t => t.temperature === lowestTemp).timestamp
    const lowestHumTime = currentData.find(t => t.humidity === lowestHum).timestamp
    const highestTempTime = currentData.find(t => t.temperature === highestTemp).timestamp
    const highestHumTime = currentData.find(t => t.humidity === highestHum).timestamp
    return { averageTemp, averageHum, lowestHum, lowestTemp, highestHum, highestTemp, latestHum, latestTemp, lowestTempTime, lowestHumTime, highestTempTime, highestHumTime }
  }

  if (timeScale !== 24) {
    const currentTime = new Date(recurringMeasurements[recurringMeasurements.length - 1].timestamp * 1000)
    const beginTime = currentTime / 1000 - timeScale * 3600
    recurringMeasurements = recurringMeasurements.filter(measurement => measurement.timestamp > beginTime)
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
