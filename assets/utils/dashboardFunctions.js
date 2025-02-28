import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchWeatherData } from "./weatherServices";

export const getWeatherDetails= async (search, setLocation, setTemperature, setIcon) => {
  if (!search) return;
  const weatherData = await fetchWeatherData(search);
  if (weatherData) {
    setLocation(weatherData.location);
    setTemperature(weatherData.temperature);
    setIcon(weatherData.icon);
  } else {
    setLocation(null);
    setTemperature(null);
    setIcon("error");
  }
};

export const logout = async (setIsLoggedIn) => {
  try {
    await AsyncStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
