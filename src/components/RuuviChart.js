import React from 'react'
import styled from 'styled-components'
import Chart from './Chart'
import ChartHeader from './ChartHeader'

const ChartWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`
const RuuviChart = ({ data, name }) => {
  const latestTemp = data[data.length - 1].temperature
  const latestHum = data[data.length - 1].relativehumidity

  const averageTemp = Number.parseFloat(data
    .map(t => t.temperature)
    .reduce((a, b) => (a + b)) / data.length)
    .toPrecision(4)

  return (
    <ChartWrapper>
      <ChartHeader name={name} latestHum={latestHum} latestTemp={latestTemp} averageTemp={averageTemp} />
      <Chart measurements={data} />
    </ChartWrapper>
  )
}

export default RuuviChart
