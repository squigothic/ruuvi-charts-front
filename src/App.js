import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import RuuviChart from './components/RuuviChart'
import Heading from './components/Heading'
import Loading from './components/Loading'
import Login from './components/Login'
import Datedisplay from './components/timepicker/Datedisplay'
import { loginUser, logoutUser, setUser } from './reducers/userReducer'
import { RootState } from './types'

const PageWrapper = styled.div``

const MainContent = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const App = () => {

  const dispatch = useDispatch()
  const measurements = useSelector((state: RootState) => state.measurements.recurring)
  const currentTimeperiod = useSelector((state: RootState) => state.measurements.currentTimeperiod)
  const user = useSelector((state: RootState) => state.user)
  const loading = useSelector((state: RootState) => state.loading)

  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    savedUser && dispatch(setUser(JSON.parse(savedUser)))
  }, [dispatch])

  const doLogout = useCallback(() => dispatch(logoutUser()), [dispatch])
  const doLogin = useCallback((user) => dispatch(loginUser(user)), [dispatch])

  measurements && console.log('measurements aawdawd: ', measurements)

  if (user === null) {
    if (loading.status === true) {
      return <Loading text={loading.message} />
    }
    return <Login login={doLogin} />
  }

  const selectComponent = (loadingStatus: boolean) => {
    if (loadingStatus === true) {
      return <Loading text={loading.message} />
    } else {
      return measurements.map(tag => (
        <RuuviChart
          key={JSON.parse(tag.data).friendlyname}
          recurringMeasurements={tag.map(measurement => JSON.parse(measurement.data))}
          tagFriendlyName={JSON.parse(tag[tag.length - 1].data).friendlyname}
        />
      ))
    }
  }

  return (
    <>
      {!measurements ? null :
        <PageWrapper>
          <Heading logout={doLogout} user={user?.username} />
          <Datedisplay currentTimeperiod={currentTimeperiod} />
          <MainContent>
            {selectComponent(loading.status)}
          </MainContent>
        </PageWrapper >
      }
    </>
  )
}

export default App
