import React from "react";
import LoginButton from "../components/ReusableButton";
import loginStyle from "../styles/loginStyle";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import loginViewModel from "../viewmodels/LoginViewModel";

const LoginPage = ({ navigation, setIsLoggedIn }) => {
  const { email, setEmail, password, setPassword, login } =
    loginViewModel(setIsLoggedIn);

  return (
    <View style={loginStyle.loginBody}>
      <Text style={loginStyle.loginTitle}>Login</Text>

      <View style={loginStyle.emailRow}>
        <Icon
          name="email"
          size={20}
          color="black"
          style={loginStyle.iconStyle}
        />
        <TextInput
          style={[loginStyle.loginInput]}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={loginStyle.emailRow}>
        <Icon
          name="lock"
          size={20}
          color="black"
          style={loginStyle.iconStyle}
        />
        <TextInput
          style={loginStyle.loginInput}
          placeholder="Password"
          placeholderTextColor={"black"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <LoginButton title={"Login"} onPress={() => login(navigation)} />
      <LoginButton
        title={"Go Back"}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default LoginPage;
