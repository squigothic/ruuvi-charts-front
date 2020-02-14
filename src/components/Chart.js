import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartData = styled.div`
  z-index: 999;
`

const Chart = ({ measurements }) => {
  const tempValues = measurements.map(measure => measure.temperature)
  const humValues = measurements.map(measure => measure.humidity)
  const timestamps = measurements.map(
    measure => new Date(measure.timestamp * 1000)
  )
  const hoursMinutes = timestamps.map(
    date => date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)
  )

  let minValue = Math.min(...tempValues)
  let maxValue = Math.max(...tempValues)


  if (maxValue - minValue < 1) {
    const change = (1 - (maxValue - minValue)) / 2
    minValue -= change
    maxValue += change
  }

  const data = {
    labels: hoursMinutes,
    datasets: [
      {
        label: 'Lämpötila',
        yAxisID: 'tempAxis',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        data: tempValues,
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
      },
      {
        label: 'Ilmankosteus',
        yAxisID: 'humAxis',
        borderColor: 'rgb(45, 94, 132)',
        fill: false,
        data: humValues,
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
      },
    ],
  }

  const options = {
    title: null,
    chart: {
      type: 'line',
      spacing: [10, 5, 15, 5]
    },
    yAxis: [{
      title: {
        text: null
      },
      minorTickInterval: 'auto'
    }, {
      opposite: true,
      title: {
        text: null
      },
      minorTickInterval: 'auto'
    }],
    xAxis: {
      categories: hoursMinutes,
      gridLineWidth: 1,
      type: 'datetime'
    },
    series: [{
      yAxis: 0,
      data: humValues,
      color: '#2d5e84',
      lineWidth: 2,
      name: 'Humidity',

    }, {
      yAxis: 1,
      data: tempValues,
      color: '#ff6384',
      lineWidth: 2,
      name: 'Temperature'
    }
    ]
  }

  return (
    <ChartData>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </ChartData>
  )
}

export default Chart
