import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSearchHistory = async (setHistory) => {
  try {
    const storedHistory = await AsyncStorage.getItem("searchHistory");
    setHistory(storedHistory ? JSON.parse(storedHistory) : []);
  } catch (error) {
    console.error("Error fetching search history:", error);
  }
};

export const navigateToCityDetails = (navigation, city) => {
  navigation.navigate("Dashboard", { city });
};
