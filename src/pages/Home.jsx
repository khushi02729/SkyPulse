import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";

import { getWeatherTheme } from "../utils/weatherTheme";
import { getWeather, getForecast } from "../services/weatherApi";

import logo from "../assets/skypulse-logo.png";

function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const theme = getWeatherTheme(weather);

  const searchCity = async (city) => {
    try {
      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <SearchBar search={searchCity} />

      {!weather && (
        <div className="welcome">
          <img src={logo} alt="SkyPulse Logo" className="welcome-logo" />

          <h2>Welcome to SkyPulse</h2>

          <p>Search a city to get real-time weather updates</p>
        </div>
      )}

      {weather && <WeatherCard weather={weather} />}

      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default Home;
