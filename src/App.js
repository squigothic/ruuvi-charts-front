import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RuuviChart from './components/RuuviChart'
import Heading from './components/Heading'
import Loading from './components/Loading'
import Login from './components/Login'
import { initUser, logoutUser } from './reducers/userReducer'

const PageWrapper = styled.div``

const MainContent = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const App = ({ initUser, user, logoutUser, measurements, loading }) => {
  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    savedUser && initUser(savedUser)
  }, [initUser])

  return (
    <PageWrapper>
      <Heading logout={logoutUser} />
      {!user ? (
        <Login login={initUser} />
      ) : (
        <MainContent>
          {!loading ? (
            measurements.map(tag => (
              <RuuviChart
                key={tag[0].tag}
                data={tag}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
