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
const RuuviChart = ({ data, name }) => {
  const [dataToShow, setDataToShow] = useState(data)
  const [timeScale, setTimescale] = useState(24)
  const averages = useSelector(state => state.measurements.average)

  useEffect(() => {
    setDataToShow(data)
  }, [data])

  const changeView = selection => {
    console.log('handlataan klikkiä, view: ', selection)
    if (selection === 'recurring') {
      setDataToShow(data)
    } else {
      setDataToShow(averages)
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
    const currentTime = new Date(data[data.length - 1].timestamp * 1000)
    const beginTime = currentTime / 1000 - timeScale * 3600
    data = data.filter(measurement => measurement.timestamp > beginTime)
  }
  console.log('averages: ', averages)

  return (
    <ChartWrapper>
      <ChartHeader
        name={name}
        data={calculateHeaderData(dataToShow)}
        setTimescale={setTimescale}
        changeView={changeView}
      />
      <Chart measurements={data} />
    </ChartWrapper>
  )
}

export default RuuviChart
