import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../models/UserModel";
import showErrorNotification from "../assets/utils/errorHelper";

export const register = async (name, email, password, navigation) => {
  if (!name || !email || !password) {
    showErrorNotification("Error", "All fields are required!");
    return;
  }

  try {
    const existingUsers = await AsyncStorage.getItem("users");
    const usersArray = existingUsers ? JSON.parse(existingUsers) : [];

    if (usersArray.some((user) => user.email === email)) {
      showErrorNotification("Error", "Email already exists!");
      return;
    }

    const newUser = new User(name, email, password);
    const userInfo = await newUser.getUserInfo();

    usersArray.push(userInfo);
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));

    showErrorNotification("Success", "Registration successful!", () => {
      navigation.navigate("Home");
    });
  } catch (error) {
    showErrorNotification("Error", "Something went wrong. Try again.");
  }
};
