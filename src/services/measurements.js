import axios from 'axios'
const baseUrl = 'https://subdomain.marakassi.com/measurements'

const getAll = () => {
  console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  return axios.get(baseUrl)
}

export default { getAll }