import { Alert } from "react-native";

const showErrorNotification = (title, message) => {
  Alert.alert(title, message);
};

export default showErrorNotification;