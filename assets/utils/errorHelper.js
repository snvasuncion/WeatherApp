import { Alert } from "react-native";

const showErrorNotification = (title, message, onPressOK = null) => {
  Alert.alert(title, message, [{ text: "OK", onPress: onPressOK }]);
};

export default showErrorNotification;
