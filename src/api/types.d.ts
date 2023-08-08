import type { AxiosError } from 'axios'

export interface Coords {
  lon: number,
  lat: number
}

export interface OpenWeatherCondition {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface OpenWeatherVolume {
  '1h'?: number,
  '3h'?: number
}

export interface OpenWeather {
  coord: Coords,
  weather: OpenWeatherCondition[],
  base: 'stations',
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  rain?: OpenWeatherVolume,
  snow?: OpenWeatherVolume,
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: 200
}

export interface OpenWeatherError {
  cod: string,
  message: string
}

export type OpenWeatherAxiosError<T = any> = AxiosError<OpenWeatherError, T>

export interface Location extends Coords {
  name: string,
  country: string,
  state: string,
  local_names?: {
    [key: string]: string
  }
}
