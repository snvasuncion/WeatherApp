import React from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import styles from "../styles/styles";

const LoginButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          "rgba(255, 255, 255, 0.3)",
          false
        )}
        useForeground={true}
        onPress={onPress}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default LoginButton;