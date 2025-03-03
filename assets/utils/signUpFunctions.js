import AsyncStorage from "@react-native-async-storage/async-storage";
import showErrorNotification from "./errorHelper";

const register = async (name, email, password, navigation) => {
  if (!name || !email || !password) {
    showErrorNotification("Error", "All fields are required!");
    return;
  }

  try {
    const existingUsers = await AsyncStorage.getItem("users");
    const usersArray = existingUsers ? JSON.parse(existingUsers) : [];

    const isDuplicate = usersArray.some((user) => user.email === email);
    if (isDuplicate) {
      showErrorNotification("Error", "This email is already registered!");
      return;
    }

    const newUser = { name, email, password };
    usersArray.push(newUser);
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));
    showErrorNotification("Success", "Registration complete!");

    navigation.goBack();
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export default register;
