import React, { useState } from "react";
import LoginButton from "../LoginButton";
import styles from "../../styles/styles";
import { View, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import showErrorNotification from "../../assets/utils/errorHelper";
import Icon from "react-native-vector-icons/MaterialIcons";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      showErrorNotification("Error", "Email and Password field is required!")
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem("users");
      const usersArray = existingUsers ? JSON.parse(existingUsers) : [];

      const user = usersArray.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        showErrorNotification("Success", "Login successful!", [{onPress: () => navigation.navigate("HomePage")}])
      } else {
        showErrorNotification("Error", "Invalid email or password");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <View style={styles.loginBody}>
      <Text style={styles.loginTitle}>Login</Text>
      
      <View style={styles.emailRow}>
      <Icon name="email" size={20} color="black" style={styles.iconStyle} />
      <TextInput
        style={[styles.loginInput]}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
    </View>

      <View style={styles.emailRow}>
      <Icon name="lock" size={20} color="black" style={styles.iconStyle} />
      <TextInput
        style={styles.loginInput}
        placeholder="Password"
        placeholderTextColor={"black"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    </View>

      <LoginButton title={"Login"} onPress={handleLogin} />
      <LoginButton title={"Go back"} onPress={() => navigation.goBack()} />

    </View>
  );
};

export default LoginPage;
