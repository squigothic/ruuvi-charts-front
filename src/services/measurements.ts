import axios from 'axios'
import { Timeperiod } from './../types/types'

// const measurementsBaseUrl = 'https://nameless-river-83647.herokuapp.com/measurements'
const measurementsBaseUrl = 'https://dry-ocean-51491.herokuapp.com/measurements'


let token: string;

export const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`
}

export const getTimeperiod = async (timePeriod: Timeperiod, user: string) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${measurementsBaseUrl}/${user}`, timePeriod, config)
  return response
}

export const getAverages = async (timePeriod: Timeperiod, user: string) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${measurementsBaseUrl}/${user}/averages`, timePeriod, config)
  return response
}

export const getLatestMeasurements = async (user: string) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(`${measurementsBaseUrl}/${user}`, config)
  return response
}

export const getLatestAverages = async (user: string) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('GETTING AVERAGES *****')

  const response = await axios.get(`${measurementsBaseUrl}/${user}/averages`, config)
  return response
}
