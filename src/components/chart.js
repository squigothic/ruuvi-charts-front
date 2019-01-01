import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ measurements }) => {

  const tempValues = measurements.map(measure => measure.temperature)
  const humValues = measurements.map(measure => measure.relativehumidity)
  const timestamps = measurements.map(measure => new Date(measure.timestamp * 1000))
  const hoursMinutes = timestamps.map(date => date.getHours()+':'+('0' + date.getMinutes()).slice(-2))

  const data = {
    labels: hoursMinutes,
    datasets: [{
      label: 'Lämpötila',
      yAxisID: 'tempAxis',
      borderColor: 'rgb(255, 99, 132)',
      fill: false,
      data: tempValues
    },
    {
      label: 'Ilmankosteus',
      yAxisID: 'humAxis',
      borderColor: 'rgb(45, 94, 132',
      fill: false,
      data: humValues
    }]
  }

  const options = {
    title: {
      display: true,
      text: 'Lämpötila ja suhteellinen ilmankosteus'
    },
    scales: {
      yAxes: [
        {
          type: 'linear',
          position: 'left',
          id: 'tempAxis',
         // ticks: {
         //   max: 26,
         //   min: 19
         // }
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
    <div className='chartContainer'>
      <Line data={ data } options={ options } />
    </div>
  )
}

export default Chart
