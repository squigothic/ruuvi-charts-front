import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import measurementService from './services/measurements'
import RuuviChart from './components/RuuviChart'
import Heading from './components/Heading'
import Loading from './components/Loading'
import Login from './components/Login'

const PageWrapper = styled.div``

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
  const [user, setUser] = useState('')

  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    savedUser && setUser(savedUser)
  }, [])

  useEffect(() => {
    user &&
      measurementService
        .getAll(user)
        .then(response => {
          setMeasurements(response.data)
          console.log(response.data)
          setLoaded(true)
        })
        .catch(err => {
          console.log('virhe: ', err)
        })
  }, [user])

  const logout = () => {
    window.localStorage.clear()
    setUser('')
  }

  return (
    <PageWrapper>
      <Heading logout={logout} />
      {!user ? (
        <Login setUsername={setUser} />
      ) : (
          <MainContent>
            {loaded ? (
              measurements.map(tag => (
                <RuuviChart
                  key={tag[0].tag}
                  measurements={tag}
                  name={tag[0].description}
                />
              ))
            ) : (
                <Loading />
              )}
          </MainContent>
        )}
    </PageWrapper>
  )
}

export default App
