import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginValidation = async (
  email,
  password,
  showErrorNotification,
  setIsLoggedIn
) => {
  if (!email || !password) {
    await showErrorNotification(
      "Error",
      "Email and Password field is required!"
    );
    return;
  }

  try {
    const existingUsers = await AsyncStorage.getItem("users");
    const usersArray = existingUsers ? JSON.parse(existingUsers) : [];

    const user = usersArray.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      await AsyncStorage.setItem("loggedInUser", JSON.stringify(user));
      await showErrorNotification("Success", "Login successful!");
      setIsLoggedIn(true);
    } else {
      await showErrorNotification("Error", "Invalid email or password");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};
