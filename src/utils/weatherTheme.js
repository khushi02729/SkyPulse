export const getWeatherTheme = (weather) => {
  if (!weather) return "default";

  const condition = weather.weather[0].main.toLowerCase();

  switch (condition) {
    case "clear":
      return "clear";

    case "clouds":
      return "clouds";

    case "rain":
    case "drizzle":
      return "rain";

    case "thunderstorm":
      return "storm";

    case "snow":
      return "snow";

    case "mist":
    case "fog":
    case "haze":
      return "mist";

    default:
      return "default";
  }
};
