import React from 'react'

const WeatherPanel: React.FC = () => {
  return (
    <div className="panel">
      <h4>Weather Monitoring</h4>
      <div className="weather-now">
        <div>
          <div className="weather-now__temp">28°C</div>
          <div className="weather-now__desc">Partly Cloudy · Feels like 30°C</div>
        </div>
        <div className="weather-now__icon"><i className="fa-solid fa-cloud-sun"></i></div>
      </div>
      <div className="weather-meta">
        <span><i className="fa-solid fa-droplet"></i> Rain Probability: 37%</span>
        <span><i className="fa-solid fa-water"></i> Humidity: 78%</span>
        <span><i className="fa-solid fa-wind"></i> Wind Speed: 12 km/h</span>
      </div>
      <div className="forecast-row">
        <div className="forecast-day"><div className="d">Tue</div><div className="icon"><i className="fa-solid fa-cloud-sun"></i></div>29°/24°</div>
        <div className="forecast-day"><div className="d">Wed</div><div className="icon"><i className="fa-solid fa-cloud"></i></div>30°/25°</div>
        <div className="forecast-day"><div className="d">Thu</div><div className="icon"><i className="fa-solid fa-cloud-sun"></i></div>31°/24°</div>
        <div className="forecast-day"><div className="d">Fri</div><div className="icon"><i className="fa-solid fa-cloud-sun"></i></div>30°/24°</div>
        <div className="forecast-day"><div className="d">Sat</div><div className="icon"><i className="fa-solid fa-cloud-rain"></i></div>29°/23°</div>
      </div>
    </div>
  )
}

export default WeatherPanel