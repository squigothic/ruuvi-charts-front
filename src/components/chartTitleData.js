import React from 'react'
import Chart from './chart'

const ChartTitleData = ({ data }) => {
  const latestTemp = data[data.length - 1].temperature
  const latestHum = data[data.length - 1].relativehumidity
  const tagName = data[data.length - 1].tagname
  //console.log('joku lämpö: ', data[data.length - 1])
  return (
    <div className='chartContainer'>
      {<h4>{tagName}</h4>}
      Last temperature reading: <b>{latestTemp}</b> Last humidity reading: <b>{latestHum}</b>
      <Chart measurements={data} />
    </div>
  )
}

export default ChartTitleData
