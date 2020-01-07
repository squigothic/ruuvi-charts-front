import axios from 'axios'

//const baseUrl = 'http://localhost:3001/measurements'
//const baseUrl = 'https://subdomain.marakassi.com/measurements'
const baseUrl = 'http://192.168.100.196:8080/measurements'


let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async user => {
  //console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  const config = {
    headers: { Authorization: token },
  }
  console.log('configin sisältö: ', config)
  try {
    const response = await axios.get(`${baseUrl}/${user}`, config)
    console.log('measurement response:', response)
    return response
  } catch (error) {
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
}

export default { getAll, setToken }
