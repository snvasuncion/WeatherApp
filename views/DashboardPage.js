import React from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ReusableButton from "../components/ReusableButton";
import dashboardStyle from "../styles/dashboardStyle";
import HinaBackground from "../assets/images/hina_images/hina_background.png";
import useDashboardViewModel from "../viewmodels/DashboardViewModel";

const DashboardPage = ({ setIsLoggedIn, route, navigation }) => {
  const {
    username,
    search,
    setSearch,
    location,
    temperature,
    icon,
    logoutFunction,
    searchCityFunction,
  } = useDashboardViewModel(navigation, route, setIsLoggedIn);

  return (
    <ImageBackground
      source={HinaBackground}
      style={dashboardStyle.backgroundImage}
    >
      <View style={dashboardStyle.blurContainer}>
        <ScrollView contentContainerStyle={dashboardStyle.scrollContainer}>
          <View style={dashboardStyle.dashboardBody}>
            <Text style={dashboardStyle.dbWelcomeText}>
              Welcome, {username}!
            </Text>
            <Text style={dashboardStyle.dbSubtitle}>
              Check the weather of any city:
            </Text>

            <View style={dashboardStyle.searchBarContainer}>
              <TextInput
                style={dashboardStyle.searchBar}
                placeholder="Search for a city..."
                placeholderTextColor="#B0B0B0"
                value={search}
                onChangeText={setSearch}
              />
              {Platform.OS === "android" ? (
                <TouchableNativeFeedback
                  onPress={searchCityFunction}
                  background={TouchableNativeFeedback.Ripple("purple", true)}
                >
                  <View style={dashboardStyle.searchButton}>
                    <Icon name="search" size={24} color="white" />
                  </View>
                </TouchableNativeFeedback>
              ) : (
                <TouchableOpacity
                  style={dashboardStyle.searchButton}
                  onPress={searchCityFunction}
                >
                  <Icon name="search" size={24} color="white" />
                </TouchableOpacity>
              )}
            </View>

            {location && (
              <View style={dashboardStyle.weatherCard}>
                <Text style={dashboardStyle.weatherText}>{location}</Text>
                <Text style={dashboardStyle.tempText}>{temperature}</Text>
                <Icon name={icon} size={50} color="white" />
              </View>
            )}

            <ReusableButton title="Logout" onPress={logoutFunction} />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default DashboardPage;
