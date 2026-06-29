
import { SunIcon, DropsIcon, RainCloudIcon } from "../layouts/icons";
import "../design/Dashboard.css"; 

export const Weather = () => {
  // TODO: Add Weather API integration here

  return (
    <div className="weather-card">
      <div className="weather-item">
        <SunIcon className="weather-icon" />
        <span className="weather-value">37°C</span>
        <span className="weather-label">Temperature</span>
      </div>
      <div className="weather-item">
        <DropsIcon className="weather-icon" />
        <span className="weather-value">65%</span>
        <span className="weather-label">Humidity</span>
      </div>
      <div className="weather-item">
        <RainCloudIcon className="weather-icon" />
        <span className="weather-value">0 mm</span>
        <span className="weather-label">Rainfall</span>
      </div>
    </div>
  );
};

export default Weather;
