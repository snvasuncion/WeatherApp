import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import DashboardPage from "./DashboardPage";
import SearchHistoryPage from "./SearchHistoryPage";

const Tab = createBottomTabNavigator();

const MainNavigator = ({ setIsLoggedIn }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Dashboard" ? "dashboard" : "history";
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#1E1E2E" },
        tabBarActiveTintColor: "#FFFFFF",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard">
        {(props) => <DashboardPage {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
      <Tab.Screen
        name="Search History"
        component={SearchHistoryPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
