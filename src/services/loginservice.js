import axios from 'axios'

//const baseUrl = 'http://192.168.100.196:8080/login'
const baseUrl = 'https://nameless-river-83647.herokuapp.com/login'

export const login = async user => {
  console.log('credentials: ', user)
  const response = await axios.post(baseUrl, user)
  return response
}

