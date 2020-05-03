import React, { useState, useEffect } from 'react'
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
  const [dataToShow, setDataToShow] = useState(recurringMeasurements)
  const [timeScale, setTimescale] = useState(24)
  const averageMeasurements = useSelector(({ measurements }) => {
    const datas = measurements.average.map(measurement => JSON.parse(measurement.data))
    return datas.filter(m => m.friendlyname === tagFriendlyName)
  })

  useEffect(() => {
    setDataToShow(recurringMeasurements)
  }, [recurringMeasurements])

  const changeView = selection => {
    if (selection === 'recurring') {
      setDataToShow(recurringMeasurements)
    } else {
      setDataToShow(averageMeasurements)
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
    return { averageTemp, averageHum, lowestHum, lowestTemp: lowestTemp, highestHum, highestTemp, latestHum, latestTemp }
  }

  if (timeScale !== 24) {
    const currentTime = new Date(recurringMeasurements[recurringMeasurements.length - 1].timestamp * 1000)
    const beginTime = currentTime / 1000 - timeScale * 3600
    recurringMeasurements = recurringMeasurements.filter(measurement => measurement.timestamp > beginTime)
  }

  console.log('averages: ', averageMeasurements)

  return (
    <ChartWrapper>
      <ChartHeader
        name={tagFriendlyName}
        data={calculateHeaderData(dataToShow)}
        setTimescale={setTimescale}
        changeView={changeView}
      />
     <Chart measurements={dataToShow} />
    </ChartWrapper>
  )
}

export default RuuviChart
