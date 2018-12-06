import axios from 'axios'
const baseUrl = 'http://127.0.0.1:3001/measurements'

const getAll = () => {
  return axios.get(baseUrl)
}

export default { getAll }