import axios from 'axios'

const baseUrl = 'http://192.168.100.196:8080/login'

export const login = async user => {
  console.log('credentials: ', user)
  try {
    const response = await axios.post(baseUrl, user)
    return response
  } catch (error) {
    console.log('Error: ', error)
  }
}
