import axios from 'axios'
const baseUrl = 'http://localhost:3001/measurements'

const getAll = (tag) => {
  console.log('tagi: ', tag)
  return axios.get(baseUrl)
}

export default { getAll }