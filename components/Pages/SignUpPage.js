import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles/styles";
import LoginButton from "../LoginButton";

const SignUpPage = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      const newUser = { name, email, password };
      const existingUsers = await AsyncStorage.getItem("users");
      const usersArray = existingUsers ? JSON.parse(existingUsers) : [];
      usersArray.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(usersArray));

      Alert.alert("Success", "Registration complete!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={
            isLandscape
              ? styles.signUpPageLandscape
              : styles.signUpScrollContainer
          }
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={
              isLandscape ? styles.signUpPageLandscape : styles.signUpContainer
            }
          >
            <Text style={styles.signUpTitle}>Sign Up</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#888"
              autoCapitalize="none"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.signUpButtonColumn}>
              <LoginButton title="Register" onPress={handleRegister} />
              <LoginButton
                title="Go back"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpPage;
