function Forecast({ forecast }) {
  return (
    <div className="forecast">
      <h2>5 Day Forecast</h2>

      <div className="forecast-container">
        {forecast.list
          .filter((item, index) => index % 8 === 0)
          .map((item, index) => (
            <div className="forecast-card" key={index}>
              <h3>
                {new Date(item.dt_txt).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </h3>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="weather"
              />

              <h2>{Math.round(item.main.temp)}°C</h2>

              <p>{item.weather[0].main}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Forecast;
