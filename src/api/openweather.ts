import axios from 'axios'
import type { Coords, Location, OpenWeather, OpenWeatherAxiosError } from '@/api/types'

export const request = axios.create({
  baseURL: 'https://api.openweathermap.org'
})

request.interceptors.request.use(
  (config) => {
    config.params.appid = import.meta.env.VITE_OPEN_WEATHER_API_KEY
    return config
  }
)
request.interceptors.response.use(
  response => response.data,
  (error: OpenWeatherAxiosError) => {
    if (error.response?.status === 500) error.message = 'Something went wrong. Try again later.'

    return Promise.reject(error)
  }
)

export function getWeather (location: Location | Coords): Promise<OpenWeather> {
  return request.get('/data/2.5/weather', { params: { lon: location.lon, lat: location.lat, units: 'metric' } })
}

export function searchLocations (q: string, limit: number = 5): Promise<Location[]> {
  return request.get('/geo/1.0/direct', { params: { q, limit } })
}
