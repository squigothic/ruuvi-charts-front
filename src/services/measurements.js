import axios from 'axios'
require('dotenv').config()

const baseUrl = 'https://subdomain.marakassi.com/measurements'

const getAll = () => {
  console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  return axios.get(baseUrl)
}

export default { getAll }