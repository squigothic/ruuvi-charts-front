import React from 'react'
import styled from 'styled-components'

const NotificationContainer = styled.div`
  color: red;
  background: lightgrey;
  font-size: 14px;
  border-style: solid;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
`

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return <NotificationContainer>{message}</NotificationContainer>
}

export default Notification
