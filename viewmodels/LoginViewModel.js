import { useState } from "react";
import { loginValidation } from "../assets/utils/loginFunctions";
import showErrorNotification from "../assets/utils/errorHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../models/UserModel";

const loginViewModel = (setIsLoggedIn) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (navigation) => {
    const validation = loginValidation(email, password);
    if (!validation.valid) {
      showErrorNotification("Error", validation.message);
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem("users");
      if (!existingUsers) {
        showErrorNotification("Error", "No registered users found.");
        return;
      }
      const usersArray = JSON.parse(existingUsers);
      const userData = usersArray.find((u) => u.email === email);

      if (!userData) {
        showErrorNotification("Error", "User not found. Please register.");
        return;
      }

      const user = new User(userData.name, userData.email, userData.password);
      const isPasswordValid = await user.verifyPassword(password);

      if (!isPasswordValid) {
        showErrorNotification("Error", "Invalid email or password.");
        return;
      }

      await AsyncStorage.setItem("loggedInUser", JSON.stringify(userData));

      showErrorNotification("Success", "Login successful!", () => {
        setIsLoggedIn(true);
        setTimeout(() => {
          navigation.replace("MainNavigator");
        }, 100);
      });
    } catch (error) {
      showErrorNotification("Error", "Something went wrong. Try again.");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
  };
};

export default loginViewModel;
