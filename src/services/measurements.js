import axios from 'axios'

//const baseUrl = 'http://localhost:3001/measurements'
const baseUrl = 'https://subdomain.marakassi.com/measurements'

const getAll = async user => {
  //console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  try {
    const response = await axios.get(baseUrl, {
      params: {
        user: user,
      },
    })
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

export default { getAll }
