import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  loginBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1E1E2E",
  },
  emailRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",
    height: 50,
    marginBottom: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  loginInput: {
    flex: 1,
    height: "100%",
    color: "black",
    fontSize: 16,
  },
});

export default loginStyle;
