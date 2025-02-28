import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import ReusableButton from "../ReusableButton";
import styles from "../../styles/styles";
import HinaBackground from "../../assets/images/hina_images/hina_background.png";
import {
  getWeatherDetails,
  logout,
} from "../../assets/utils/dashboardFunctions";

const DashboardPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("Guest");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState("wb-sunny");
  const searchPlace = () =>
    getWeatherDetails(search, setLocation, setTemperature, setIcon);
  const logoutFunction = () => logout(setIsLoggedIn);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const userData = await AsyncStorage.getItem("loggedInUser");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUsername(parsedUser.name || "Guest");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUsername();
  }, []);

  return (
    <ImageBackground source={HinaBackground} style={styles.backgroundImage}>
      <View style={styles.blurContainer}>
        <View style={styles.dashboardBody}>
          <Text style={styles.dbWelcomeText}>Welcome, {username}!</Text>
          <Text style={styles.dbSubtitle}>Check the weather of any city:</Text>

          <View
            style={[
              styles.searchBarContainer,
              { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            ]}
          >
            <TextInput
              style={styles.searchBar}
              placeholder="Search for a city..."
              placeholderTextColor="#B0B0B0"
              value={search}
              onChangeText={setSearch}
            />
            {Platform.OS === "android" ? (
              <TouchableNativeFeedback
                onPress={searchPlace}
                background={TouchableNativeFeedback.Ripple("purple", true)}
              >
                <View style={styles.searchButton}>
                  <Icon name="search" size={24} color="white" />
                </View>
              </TouchableNativeFeedback>
            ) : (
              <TouchableOpacity
                style={styles.searchButton}
                onPress={searchPlace}
              >
                <Icon name="search" size={24} color="white" />
              </TouchableOpacity>
            )}
          </View>

          {location && (
            <View style={styles.weatherCard}>
              <Text style={styles.weatherText}>{location}</Text>
              <Text style={styles.tempText}>{temperature}</Text>
              <Icon name={icon} size={50} color="white" />
            </View>
          )}

          <ReusableButton title="Logout" onPress={logoutFunction} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default DashboardPage;
