import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import searchHistoryStyle from "../styles/searchHistoryStyle";
import HinaBackground from "../assets/images/hina_images/hina_background.png";
import {
  getSearchHistory,
  navigateToCityDetails,
} from "../viewmodels/SearchHistoryViewModel";

const SearchHistoryPage = ({ navigation }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getSearchHistory(setHistory);
    const unsubscribe = navigation.addListener("focus", () =>
      getSearchHistory(setHistory)
    );
    return unsubscribe;
  }, [navigation]);

  return (
    <ImageBackground
      source={HinaBackground}
      style={searchHistoryStyle.backgroundImage}
    >
      <View style={searchHistoryStyle.blurContainer}>
        {history.length > 0 && (
          <Text style={searchHistoryStyle.historyTitle}>
            Cities You've Checked
          </Text>
        )}

        <FlatList
          data={history}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={searchHistoryStyle.historyCard}
              onPress={() => navigateToCityDetails(navigation, item)}
            >
              <View style={searchHistoryStyle.historyItem}>
                <Text style={searchHistoryStyle.historyText}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={searchHistoryStyle.noHistoryContainer}>
              <Icon name="cloud-off" size={50} color="white" />
              <Text style={searchHistoryStyle.noHistoryText}>
                There are no cities searched yet...
              </Text>
            </View>
          }
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        />
      </View>
    </ImageBackground>
  );
};

export default SearchHistoryPage;
