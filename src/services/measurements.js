import axios from 'axios'

// const measurementsBaseUrl = 'https://nameless-river-83647.herokuapp.com/measurements'
const measurementsBaseUrl = 'https://dry-ocean-51491.herokuapp.com/measurements'


let token = null

export const setToken = newToken => {
  token = `Bearer ${newToken}`
}

export const getTimeperiod = async (timePeriod, user) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${measurementsBaseUrl}/${user}`, timePeriod, config)
  return response
}

export const getAverages = async (timePeriod, user) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${measurementsBaseUrl}/${user}/averages`, timePeriod, config)
  return response
}

export const getLatestMeasurements = async user => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(`${measurementsBaseUrl}/${user}`, config)
  return response
}

export const getLatestAverages = async user => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('GETTING AVERAGES *****')

  const response = await axios.get(`${measurementsBaseUrl}/${user}/averages`, config)
  return response
}
