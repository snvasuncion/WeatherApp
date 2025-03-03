import { StyleSheet } from "react-native";

const searchHistoryStyle = StyleSheet.create({
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
  historyTitle: {
    padding: 16,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Manrope-Medium",
  },
  historyList: {
    width: "100%",
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  historyCard: {
    backgroundColor: "#2C2C3E",
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 22,
    width: "90%",
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  historyItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  historyText: {
    fontSize: 22,
    color: "#E0C3FC",
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Manrope-Medium",
  },
  noHistoryText: {
    fontSize: 16,
    color: "#B0B0B0",
    textAlign: "center",
    marginTop: 20,
  },
  noHistoryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default searchHistoryStyle;
