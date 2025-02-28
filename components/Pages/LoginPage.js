import React, { useState } from "react";
import LoginButton from "../ReusableButton";
import styles from "../../styles/styles";
import { View, Text, TextInput } from "react-native";
import showErrorNotification from "../../assets/utils/errorHelper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { loginValidation } from "../../assets/utils/loginFunctions";

const LoginPage = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <LoginButton
        title={"Login"}
        onPress={() =>
          loginValidation(email, password, showErrorNotification, setIsLoggedIn)
        }
      />
      <LoginButton
        title={"Go Back"}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default LoginPage;
