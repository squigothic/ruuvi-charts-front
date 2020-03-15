import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RuuviChart from './components/RuuviChart'
import Heading from './components/Heading'
import Loading from './components/Loading'
import Login from './components/Login'
import Datedisplay from './components/timepicker/Datedisplay'
import { initUser, logoutUser, setUser } from './reducers/userReducer'

const PageWrapper = styled.div`

  `

const MainContent = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const App = ({
  initUser,
  user,
  logoutUser,
  measurements,
  loading,
  setUser,
  currentTimeperiod,
}) => {
  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    savedUser && setUser(JSON.parse(savedUser))
  }, [setUser])

  return (
    <PageWrapper>
      <Heading logout={logoutUser} user={user} />

      {!user ? (
        <Login login={initUser} />
      ) : (
          <>
            <Datedisplay currentTimeperiod={currentTimeperiod} />
            <MainContent>
              {!loading ? (
                measurements.map(tag => (
                  <RuuviChart
                    key={JSON.parse(tag[0].data).friendlyname}
                    data={tag.map(measurement => JSON.parse(measurement.data))}
                    name={JSON.parse(tag[tag.length - 1].data).friendlyname}
                  />
                ))
              ) : (
                  <Loading />
                )}
            </MainContent>
          </>
        )}
    </PageWrapper>
  )
}

const mapStateToProps = state => {
  return {
    measurements: state.measurements.data,
    currentTimeperiod: state.measurements.currentTimeperiod,
    user: state.user,
    loading: state.measurements.isFetching,
  }
}

const mapDispatchToProps = {
  initUser,
  logoutUser,
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
