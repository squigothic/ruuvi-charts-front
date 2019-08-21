import axios from 'axios'
require('dotenv').config()

//const baseUrl = 'http://localhost:3001/measurements'
const baseUrl = 'https://subdomain.marakassi.com/measurements'

const getAll = user => {
  //console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  return axios.get(baseUrl, {
    params: {
      user: user
    }
  })
}

export default { getAll }
