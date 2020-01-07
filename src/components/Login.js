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

const Login = ({ login }) => {
  const [newUser, setNewUser] = useState('insert username...')
  const [password, setPassword] = useState('insert password...')

  const submitUser = event => {
    event.preventDefault()
    login({
      'username': newUser,
      'password': password
    })
    setNewUser('')
  }

  const handleFormChange = event => {
    switch (event.target.name) {
      case 'username':
        setNewUser(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        return null
    }
  }

  return (
    <LoginBox>
      <form onSubmit={submitUser}>
        <input
          type="text"
          name="username"
          value={newUser}
          onChange={handleFormChange}
          onClick={() => newUser === 'insert username...' && setNewUser('')}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleFormChange}
          onClick={() => password === 'insert password...' && setPassword('')}
        />
        <button type="submit">save</button>
      </form>
    </LoginBox>
  )
}

export default Login
