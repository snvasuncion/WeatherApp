import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getWeatherDetails,
  searchCityDetails,
  logout,
} from "../assets/utils/dashboardFunctions";

const dashboardViewModel = (navigation, route, setIsLoggedIn) => {
  const [username, setUsername] = useState("Guest");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState("wb-sunny");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const userData = await AsyncStorage.getItem("loggedInUser");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUsername(parsedUser?.name || "Guest");
        } else {
          setUsername("Guest");
        }
      } catch (error) {
        showErrorNotification("Error", "Failed to fetch user data.");
      }
    };
    fetchUsername();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem("searchHistory");
        setHistory(storedHistory ? JSON.parse(storedHistory) : []);
      } catch (error) {
        showErrorNotification("Error", "Failed to fetch search history.");
      }
    };
    fetchHistory();
    const unsubscribe = navigation.addListener("focus", fetchHistory);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (route.params?.city) {
      const selectedCity = route.params.city;
      setSearch(selectedCity);
      getWeatherDetails(selectedCity, setLocation, setTemperature, setIcon);
    }
  }, [route.params?.city]);

  const logoutFunction = async () => {
    await logout(setIsLoggedIn);
  };

  const searchCityFunction = async () => {
    if (!search.trim()) {
      showErrorNotification(
        "Invalid Input",
        "Please enter a city before searching"
      );
      return;
    }
    await searchCityDetails(
      search,
      setSearch,
      setLocation,
      setTemperature,
      setIcon,
      setHistory
    );
  };

  return {
    username,
    search,
    setSearch,
    location,
    temperature,
    icon,
    history,
    logoutFunction,
    searchCityFunction,
  };
};

export default dashboardViewModel;
