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

  return (
    <ChartWrapper>
      <ChartHeader name={name} latestHum={latestHum} latestTemp={latestTemp} />
      <Chart measurements={data} />
    </ChartWrapper>
  )
}

export default RuuviChart
