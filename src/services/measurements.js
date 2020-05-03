import axios from 'axios'

const measurementsBaseUrl = 'https://nameless-river-83647.herokuapp.com/measurements'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getTimeperiod = async (timePeriod, user) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${measurementsBaseUrl}/${user}`, timePeriod, config)
  return response
}

const getAverages = async (timePeriod, user) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${measurementsBaseUrl}/${user}/averages`, timePeriod, config)
  return response
}

const getLatestMeasurements = async user => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(`${measurementsBaseUrl}/${user}`, config)
  return response
}

const getLatestAverages = async user => {
  const config = {
    headers: { Authorization: token },
  }


  const response = await axios.get(`${measurementsBaseUrl}/${user}/averages`, config)
  return response
}

export default { getLatestMeasurements, setToken, getTimeperiod, getAverages, getLatestAverages }
