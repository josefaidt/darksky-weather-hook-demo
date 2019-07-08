import React from 'react'
import logo from './logo.svg'
import './App.css'
import WeatherData from './WeatherData'
import useGeoLocation from './hooks/useGeoLocation'

function App() {
  const state = useGeoLocation()
  return (
    <div className="App">
      {state.longitude !== null && state.latitude !== null ? (
        <WeatherData geoLocation={state} />
      ) : (
        <span>Need GeoLocation</span>
      )}
    </div>
  )
}

export default App
