import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import WeatherApp from "./components/WeatherApp";
import SignUpPage from "./components/Pages/SignUpPage";
import LoginPage from "./components/Pages/LoginPage";
import { Animated, Easing } from "react-native";

const Stack = createStackNavigator();

const fadeTransition = {
  gestureEnabled: true,
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 800, // Duration of the fade effect
        easing: Easing.out(Easing.poly(4)),
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 800,
        easing: Easing.out(Easing.poly(4)),
      },
    },
  },
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress, // Fades based on transition progress
    },
  }),
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WeatherApp} />
        <Stack.Screen name="Login" component={LoginPage} options={fadeTransition} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={fadeTransition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
