import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)

const ChartData = styled.div`
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
      minorTickInterval: 'auto',
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
