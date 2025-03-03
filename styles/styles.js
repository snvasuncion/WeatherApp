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
  appBodyLandscape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1E1E2E",
    width: "100%",
    height: "100%",
    paddingHorizontal: 100,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
    fontFamily: "Satoshi-Variable",
    fontWeight: "700",
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
  buttonView: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonWrapper: {
    borderRadius: 30,
    marginVertical: 10,
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
