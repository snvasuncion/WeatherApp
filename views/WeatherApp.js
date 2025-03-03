import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Image } from "expo-image";
import ReusableButton from "../components/ReusableButton";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useOrientation, useRandomGif } from "../viewmodels/WeatherAppViewModel";

const WeatherApp = () => {
  const navigation = useNavigation();
  const isLandscape = useOrientation();
  
  const gifArray = [
    require("../assets/images/hina_images/hina-hina-sorasaki.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-2.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-3.gif"),
    require("../assets/images/hina_images/hina-hina-sorasaki-4.gif"),
  ];
  
  const randomGif = useRandomGif(gifArray);

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
        <ReusableButton title="Sign In" onPress={() => navigation.navigate("Login")} />
        <ReusableButton title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      </View>
    </View>
  );
};

export default WeatherApp;
