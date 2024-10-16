// Navigation Setup
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/Home";
import DummyScreen from "../screens/home/dummyScreen/DummyScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") iconName = "home";
        else if (route.name === "Ticket") iconName = "ticket";
        else if (route.name === "Favourite Hotel") iconName = "bookmark";
        else if (route.name === "Profile") iconName = "user";

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Ticket" component={DummyScreen} />
    <Tab.Screen name="Favourite Hotel" component={DummyScreen} />
    <Tab.Screen name="Profile" component={DummyScreen} />
  </Tab.Navigator>
);
export default bottomTabNavigator;
