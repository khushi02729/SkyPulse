import { WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>{weather.weather[0].description}</h3>

      <div className="details">
        <p>
          <WiThermometer size={30} />
          Feels Like:
          <br />
          {Math.round(weather.main.feels_like)}°C
        </p>

        <p>
          <WiHumidity size={30} />
          Humidity:
          <br />
          {weather.main.humidity}%
        </p>

        <p>
          <WiStrongWind size={30} />
          Wind:
          <br />
          {weather.wind.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
