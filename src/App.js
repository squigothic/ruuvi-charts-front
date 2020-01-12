import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RuuviChart from './components/RuuviChart'
import Heading from './components/Heading'
import Loading from './components/Loading'
import Login from './components/Login'
import Datedisplay from './components/timepicker/Datedisplay'
import { initUser, logoutUser, setUser } from './reducers/userReducer'
import { getTimeperiod } from './reducers/measurementsReducer'

const PageWrapper = styled.div``

const MainContent = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const App = ({ initUser, user, logoutUser, measurements, loading, setUser }) => {

  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    savedUser && setUser(JSON.parse(savedUser))
  }, [setUser])

  return (
    <PageWrapper>
      <Heading logout={logoutUser} />
      <Datedisplay getTimeperiod={getTimeperiod} />
      {!user ? (
        <Login login={initUser} />
      ) : (
          <MainContent>
            {!loading ? (
              measurements.map(tag => (
                <RuuviChart
                  key={(JSON.parse(tag[0].data)).friendlyname}
                  data={tag.map(measurement => JSON.parse(measurement.data))}
                  name={(JSON.parse(tag[0].data)).friendlyname}
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

const mapStateToProps = state => {
  return {
    measurements: state.measurements.data,
    user: state.user,
    loading: state.measurements.isFetching,
  }
}

const mapDispatchToProps = {
  initUser,
  logoutUser,
  setUser,
  getTimeperiod
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
