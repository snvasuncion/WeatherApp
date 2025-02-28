import React from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "../styles/styles";

const ReusableButton = ({ title, onPress }) => {
  const ButtonPlatform =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.buttonWrapper}>
      <ButtonPlatform
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
      </ButtonPlatform>
    </View>
  );
};

export default ReusableButton;
