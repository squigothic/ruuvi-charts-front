import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import measurementService from './services/measurements'
import RuuviChart from './components/RuuviChart'
import Heading from './components/Heading'

const PageWrapper = styled.div`

`

const MainContent = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const App = () => {
  const [measurementsOne, setMeasurementsOne] = useState([])
  const [measurementsTwo, setMeasurementsTwo] = useState([])
  const [measurementsThree, setMeasurementsThree] = useState([])
  const [measurementsFour, setMeasurementsFour] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    measurementService
      .getAll()
      .then(response => {
        console.log('pyyntö onnistui')
        const distinctTags = getGroupedBy(response.data, 'tagname')
        setMeasurementsOne(distinctTags[0])
        setMeasurementsTwo(distinctTags[1])
        setMeasurementsThree(distinctTags[2])
        setMeasurementsFour(distinctTags[3])
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
      <PageWrapper>
        <Heading />
        <MainContent>
          <RuuviChart data={measurementsOne} name='Parveke' />
          <RuuviChart data={measurementsTwo} name='Makuuhuone' />
          <RuuviChart data={measurementsThree} name='Kylppäri' />
          <RuuviChart data={measurementsFour} name='Olohuone' />
        </MainContent>
      </PageWrapper>
    )
  }

  return (
    <div>
      <h1 className='titleCentered'>Ruuvifrontend</h1>
    </div>
  )
}


export default App
