import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WeatherApp from "./views/WeatherApp";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import MainNavigator from "./views/MainNavigator";

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

const fadeTransition = {
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    async function prepareApp() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = await AsyncStorage.getItem("loggedInUser");
        setIsLoggedIn(!!user);
      } catch (error) {
        console.warn("Error loading app:", error);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigationRef.current?.replace("MainNavigator"); 
    }
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={WeatherApp} />
            <Stack.Screen name="Login" options={fadeTransition}>
              {(props) => (
                <LoginPage {...props} setIsLoggedIn={setIsLoggedIn} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={fadeTransition}
            />
          </>
        ) : (
          <Stack.Screen name="MainNavigator">
            {(props) => (
              <MainNavigator {...props} setIsLoggedIn={setIsLoggedIn} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
