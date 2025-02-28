import { Alert } from "react-native";
const showErrorNotification = (title, message) => {
  return new Promise((resolve) => {
    Alert.alert(title, message, [{ text: "OK", onPress: resolve }]);
  });
};
export default showErrorNotification;
