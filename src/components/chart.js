import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ measurements }) => {

  const tempValues = measurements.map(measure => measure.temperature)
  const humValues = measurements.map(measure => measure.relativehumidity)
  const timestamps = measurements.map(measure => new Date(measure.timestamp * 1000))
  const hhmm = timestamps.map(date => date.getHours()+':'+('0' + date.getMinutes()).slice(-2))

  console.log(hhmm)
  
  console.log('lämpötilat: ', tempValues)

  const data = {
    labels: hhmm,
    //labels: ['mittaus1', 'mittaus2', 'mittaus3', 'mittaus4', 'mittaus5', 'mittaus6', 'mittaus7'],
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
          id: 'tempAxis'
        }, {
          type: 'linear',
          position: 'right',
          id: 'humAxis'
        }
      ]
    }
  }

  return (
    <div>
      <Line data={ data } options={ options } />
    </div>
  )
}

export default Chart
