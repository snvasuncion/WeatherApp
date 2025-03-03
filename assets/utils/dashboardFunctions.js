import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchWeatherData } from "../../api/weatherServices";

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

export const searchCityDetails = async (search, setSearch, setLocation, setTemperature, setIcon, setHistory) => {
  if (!search.trim()) {
    return;
  }

  const formattedSearchInput = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

  await getWeatherDetails(formattedSearchInput, setLocation, setTemperature, setIcon);

  try {
    const storedHistory = await AsyncStorage.getItem("searchHistory");
    const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];

    const updatedHistory = [...new Set([formattedSearchInput, ...parsedHistory])];
    await AsyncStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    
    setHistory(updatedHistory);
    setSearch(formattedSearchInput);
  } catch (error) {
    console.error("Error updating search history:", error);
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
