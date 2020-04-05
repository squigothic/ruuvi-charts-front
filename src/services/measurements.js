import axios from 'axios'

// import store from '../store'
// import { logoutUser } from '../reducers/userReducer'

const baseUrl = 'https://nameless-river-83647.herokuapp.com/measurements'
//const baseUrl = 'https://subdomain.marakassi.com/measurements'
//const baseUrl = 'http://192.168.100.196:8080/measurements'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getTimeperiod = async (period, user) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/${user}`, period, config)
  return response
}

const getAll = async user => {
  //console.log(`Tehdään pyyntö osoitteeseen ${baseUrl}`)
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(`${baseUrl}/${user}`, config)
  return response
}

export default { getAll, setToken, getTimeperiod }
