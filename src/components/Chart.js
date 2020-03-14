import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)
require('highcharts/modules/data')(Highcharts)


const ChartData = styled.div`
`

const Chart = ({ measurements }) => {
  const tempValues = measurements.map(measure => measure.temperature)
  const humValues = measurements.map(measure => measure.humidity)
  const timestamps = measurements.map(
    measure => measure.timestamp * 1000
  )

  const tempData = []
  const humData = []
  for (let i = 0; i < timestamps.length; i++) {
    tempData.push([timestamps[i], tempValues[i]])
    humData.push([timestamps[i], humValues[i]])
  }



  const options = {
    title: null,
    chart: {
      type: 'spline',
      spacing: [10, 15, 15, 10],
      alignTicks: false
      //spacing: [10, 5, 15, 5]
    },
    plotOptions: {
      series: {
        states: {
          inactive: {
            opacity: 1
          }
        }
      }
    },
    yAxis: [{
      title: {
        text: null
      },
      clip: false
    }, {
      opposite: true,
      title: {
        text: null
      },
      clip: false
    }],
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e. %b.',
        week: '%e. %b.',
        month: '%m/%y',
        hour: '%H:%M'
      },
      minorTicks: true
    },
    series: [
      {
        data: tempData,
        yAxis: 1,
        color: '#ff6384',
        lineWidth: 3,
        name: 'Temperature',
        marker: {
          enabled: false
        }
      },
      {
        data: humData,
        yAxis: 0,
        color: '#2d5e84',
        lineWidth: 3,
        name: 'Humidity',
        marker: {
          enabled: false
        }
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
