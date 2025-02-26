import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E2E",
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 24,
    fontFamily: "Manrope_700Bold",
    color: "white",
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 130,
    padding: 10,
    width: 270,
    height: 270,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: 30,
  },
  imageProperty: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: 20,
  },
  buttonWrapper: {
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonStyle: {
    width: 140,
    height: 50,
    backgroundColor: "purple",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Manrope_700Bold",
    color: "white",
  },
});

export default styles;
