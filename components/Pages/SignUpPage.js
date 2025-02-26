import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"
import LoginButton from "../loginButtons";

const SignUpPage = () => {
    
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Sign-Up Page!</Text>
      <LoginButton title={"Go back"} onPress={() => navigation.goBack()}></LoginButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E2E",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default SignUpPage;
