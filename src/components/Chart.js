import React from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

const ChartData = styled.div`
`

const Chart = ({ measurements }) => {

  const tempValues = measurements.map(measure => measure.temperature)
  const humValues = measurements.map(measure => measure.relativehumidity)
  const timestamps = measurements.map(measure => new Date(measure.timestamp * 1000))
  const hoursMinutes = timestamps.map(date => date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2))

  const data = {
    labels: hoursMinutes,
    datasets: [{
      label: 'Lämpötila',
      yAxisID: 'tempAxis',
      borderColor: 'rgb(255, 99, 132)',
      fill: false,
      data: tempValues,
      borderWidth: 3,
      pointRadius: 0,
      pointHitRadius: 10
    },
    {
      label: 'Ilmankosteus',
      yAxisID: 'humAxis',
      borderColor: 'rgb(45, 94, 132',
      fill: false,
      data: humValues,
      borderWidth: 3,
      pointRadius: 0,
      pointHitRadius: 10
    }]
  }

  const options = {
    title: {
      display: false,
      text: 'Lämpötila ja suhteellinen ilmankosteus'
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          type: 'linear',
          position: 'left',
          id: 'tempAxis',
          // ticks: {
          //   max: 32,
          //   min: 15,
          //   stepSize: 1
          //}
        }, {
          type: 'linear',
          position: 'right',
          id: 'humAxis',
          // ticks: {
          //   max:101,
          //   min: 80
          // }
        }
      ]
    }
  }

  return (
    <ChartData>
      <Line data={data} options={options} />
    </ChartData>
  )
}

export default Chart
