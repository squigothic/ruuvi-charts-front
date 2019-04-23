import axios from 'axios'
require('dotenv').config()

const baseUrl = 'http://localhost:3001/measurements'

const getAll = () => {
  console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  return axios.get(baseUrl)
}

export default { getAll }
