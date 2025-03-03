import { StyleSheet } from "react-native";

const signUpStyle = StyleSheet.create({
  signUpinput: {
    width: "100%",
    height: 50,
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "grey",
  },
  signUpTitle: {
    fontSize: 24,
    fontFamily: "Manrope_700Bold",
    color: "white",
    marginBottom: 20,
  },
  signUpButtonColumn: {
    paddingTop: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
  },
  signUpScrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#1E1E2E",
  },
  signUpContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#1E1E2E",
  },
  signUpPageLandscape: {
    backgroundColor: "#2E2E3E",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: "#1E1E2E",
  },
});

export default signUpStyle;
