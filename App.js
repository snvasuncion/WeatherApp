import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WeatherApp from "./components/WeatherApp";
import LoginPage from "./components/Pages/LoginPage";
import SignUpPage from "./components/Pages/SignUpPage";
import DashboardPage from "./components/Pages/DashboardPage";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem("loggedInUser");
      setIsLoggedIn(!!user);
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={WeatherApp} />
            <Stack.Screen name="Login">
              {(props) => <LoginPage {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpPage} />
          </>
        ) : (
          <Stack.Screen name="Dashboard">
            {(props) => <DashboardPage {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}