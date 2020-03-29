import axios from 'axios'

//const baseUrl = 'http://192.168.100.196:8080/login'
const baseUrl = 'https://nameless-river-83647.herokuapp.com/login'

const handleError = (error) => {
  if (error.response) {
    console.log('response error')
    console.log(error.response.data)
    console.log(error.response.status)
  } else if (error.request) {
    console.log('request error: ')
    console.log(error.request)
  } else {
    console.log('Error: ', error.message)
  }
}

export const login = async user => {
  console.log('credentials: ', user)
  try {
    const response = await axios.post(baseUrl, user)
    return response
  } catch (error) {
    handleError(error)
  }
}

