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
  const [measurements, setMeasurements] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    measurementService
      .getAll('squi')
      .then(response => {
        console.log(response.data)
        setMeasurements(response.data)
        setLoaded(true)
      })
      .catch(err => {
        console.log('virhe: ', err)
      })
  }, [])

  if (loaded) {
    return (
      <PageWrapper>
        <Heading />
        <MainContent>
          <RuuviChart data={measurements[0]} name='Parveke' />
          <RuuviChart data={measurements[1]} name='Makuuhuone' />
          <RuuviChart data={measurements[2]} name='Kylppäri' />
          <RuuviChart data={measurements[3]} name='Olohuone' />
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
