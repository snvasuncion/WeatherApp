import { StyleSheet, Platform } from "react-native";

const dashboardStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    backgroundColor: "rgba(30, 30, 46, 0.8)",
    padding: 20,
    justifyContent: "center",
  },
  dashboardBody: {
    alignItems: "center",
  },
  dbWelcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  dbSubtitle: {
    fontSize: 18,
    color: "#B0B0B0",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(40, 42, 58, 0.9)",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  searchButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#7D5FFF",
  },
  weatherText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  weatherCard: {
    backgroundColor: "#2C2C3E",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  tempText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginTop: 5,
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default dashboardStyle;
