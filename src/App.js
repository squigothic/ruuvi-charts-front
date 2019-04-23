import React, { useState, useEffect } from 'react'
import measurementService from './services/measurements'
import ChartTitleData from './components/chartTitleData'

const App = () => {
  const [measurementsOne, setMeasurementsOne] = useState([])
  const [measurementsTwo, setMeasurementsTwo] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    measurementService
      .getAll()
      .then(response => {
        console.log('pyyntö onnistui')
        const distinctTags = getGroupedBy(response.data, 'tagname')
        setMeasurementsOne(distinctTags[0])
        setMeasurementsTwo(distinctTags[1])
        setLoaded(true)
      })
      .catch(err => {
        console.log('virhe: ', err)
      })
  }, [])

  const getGroupedBy = (data, key) => {
    let groups = {}
    let result = []
    data.forEach((a) => {
      if (!(a[key] in groups)) {
        groups[a[key]] = []
        result.push(groups[a[key]])
      }
      groups[a[key]].push(a)
    })
    return result
  }

  console.log('measurements1: ', measurementsOne)
  console.log('measurements2: ', measurementsTwo)
  if (loaded) {
    return (
      <div>
        <h1 className='titleCentered'>Ruuvifrontend</h1>
        <ChartTitleData data={measurementsOne} />
        <ChartTitleData data={measurementsTwo} />
      </div >
    )
  }

  return (
    <div>
      <h1 className='titleCentered'>Ruuvifrontend</h1>
    </div>
  )
}


export default App
