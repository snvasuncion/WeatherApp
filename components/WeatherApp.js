import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { Image } from "expo-image";
import LoginButton from "./loginButtons";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const WeatherApp = () => {
  const navigation = useNavigation();

  const gifArray = [
    require("../assets/images/hina_images/hina-hina-sorasaki.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-2.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-3.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-4.gif"),
  ];

  const [randomGif, setRandomGif] = useState(gifArray[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifArray.length);
    setRandomGif(gifArray[randomIndex]);
  }, []);

  return (
    <View style={styles.appBody}>
      <StatusBar style="auto" />

      <View style={styles.imageContainer}>
        <Image style={styles.imageProperty} source={randomGif} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>Hina Weather App</Text>
      </View>
      <View style={styles.buttonsView}>
        <LoginButton
          title="Sign In"
          onPress={() => console.log("Sign In Pressed")}
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
