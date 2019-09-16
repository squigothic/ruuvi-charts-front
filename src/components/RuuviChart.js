import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from './Chart'
import ChartHeader from './chartheader/ChartHeader'

const ChartWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`
const RuuviChart = ({ data, name }) => {
  const [timeScale, setTimescale] = useState(24)

  const latestTemp = data[data.length - 1].temperature
  const latestHum = data[data.length - 1].relativehumidity

  const averageTemp = Number.parseFloat(
    data.map(t => t.temperature).reduce((a, b) => a + b) / data.length
  ).toPrecision(4)

  const averageHum = Number.parseFloat(
    data.map(t => t.relativehumidity).reduce((a, b) => a + b) / data.length
  ).toPrecision(4)

  if (timeScale !== 24) {
    const currentTime = new Date(data[data.length - 1].timestamp * 1000)
    const beginTime = currentTime / 1000 - timeScale * 3600
    data = data.filter(measurement => measurement.timestamp > beginTime)
  }

  return (
    <ChartWrapper>
      <ChartHeader
        name={name}
        latestHum={latestHum}
        latestTemp={latestTemp}
        averageTemp={averageTemp}
        averageHum={averageHum}
        setTimescale={setTimescale}
      />
      <Chart measurements={data} />
    </ChartWrapper>
  )
}

export default RuuviChart
