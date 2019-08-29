import React, { useState } from 'react'
import styled from 'styled-components'

const LoginBox = styled.div`
  background: lightgray;
  height: 40px;
  margin: 20px auto;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Login = ({ setUsername }) => {
  const [newUser, setNewUser] = useState('insert username...')

  const submitUser = (event) => {
    event.preventDefault()
    setUsername(newUser)
    window.localStorage.setItem('user', newUser)
    setNewUser('')
  }

  const handleFormChange = (event) => {
    setNewUser(event.target.value)
  }

  return (
    <LoginBox>
      <form onSubmit={submitUser}>
        <input type="text" value={newUser} onChange={handleFormChange} onClick={() => newUser === 'insert username...' && setNewUser('')} />
        <button type="submit">save</button>
      </form>
    </LoginBox>
  )
}

export default Login
