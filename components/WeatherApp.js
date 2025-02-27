import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, Dimensions } from "react-native";
import { Image } from "expo-image";
import LoginButton from "./LoginButton";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WeatherApp = () => {
  const navigation = useNavigation();

  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get("window").width > Dimensions.get("window").height
  );

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(
        Dimensions.get("window").width > Dimensions.get("window").height
      );
    };

    const subscription = Dimensions.addEventListener(
      "change",
      updateOrientation
    );
    return () => subscription?.remove();
  }, []);

  const gifArray = [
    require("../assets/images/hina_images/hina-hina-sorasaki.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-2.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-3.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-4.gif"),
  ];

  const [randomGif, setRandomGif] = useState(gifArray[0]);

  const getAllUsers = async () => {
    try {
      const users = await AsyncStorage.getItem("users");
      if (users) {
        console.log("All Users:", JSON.parse(users));
      } else {
        console.log("No users found.");
      }
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifArray.length);
    setRandomGif(gifArray[randomIndex]);
    getAllUsers();
  }, []);

  return (
    <View style={isLandscape ? styles.appBodyLandscape : styles.appBody}>
      <StatusBar style="auto" />

      <View style={styles.imageContainer}>
        <Image style={styles.imageProperty} source={randomGif} />
      </View>

      <View style={styles.buttonView}>
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>Hina Weather App</Text>
        </View>
        <LoginButton
          title="Sign In"
          onPress={() => navigation.navigate("Login")}
        />
        <LoginButton
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default WeatherApp;
