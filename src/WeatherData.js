import React from 'react'
import useWeather from './hooks/useWeather'

const WeatherData = props => {
  const [data, setData] = React.useState({})
  const { pending, error } = useWeather(props.geoLocation, setData)
  if (pending) return <span>Loading...</span>
  if (error) return <pre>{error}</pre>
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default WeatherData
