import axios from "axios";

const API_KEY = ""; //put API key inside the double quotation marks
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    const data = response.data;
    return {
      location: `${data.name}, ${data.sys.country}`,
      temperature: `${data.main.temp}°C`,
      icon: data.weather[0].icon.includes("n") ? "nights-stay" : "wb-sunny",
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};