import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import signUpStyle from "../styles/signUpStyle";
import ReusableButton from "../components/ReusableButton";
import { register } from "../viewmodels/SignUpViewModel";

const SignUpPage = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={
            isLandscape
              ? signUpStyle.signUpPageLandscape
              : signUpStyle.signUpScrollContainer
          }
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={
              isLandscape
                ? signUpStyle.signUpPageLandscape
                : signUpStyle.signUpContainer
            }
          >
            <Text style={signUpStyle.signUpTitle}>Sign Up</Text>

            <TextInput
              style={[
                signUpStyle.signUpinput,
                { backgroundColor: "#F5F5F5", color: "black" },
              ]}
              placeholder="Name"
              placeholderTextColor="black"
              autoCapitalize="none"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={[
                signUpStyle.signUpinput,
                { backgroundColor: "#F5F5F5", color: "black" },
              ]}
              placeholder="Email Address"
              placeholderTextColor="black"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={[
                signUpStyle.signUpinput,
                { backgroundColor: "#F5F5F5", color: "black" },
              ]}
              placeholder="Password"
              placeholderTextColor="black"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={signUpStyle.signUpButtonColumn}>
              <ReusableButton
                title="Register"
                onPress={() => register(name, email, password, navigation)}
              />
              <ReusableButton
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