import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import Splash from "../screens/splash/Splash";
import ParticularScreen from "../screens/particularScreen/ParticularScreen";
import bottomTabNavigator from "./bottomTabNavigation";

const Stack = createNativeStackNavigator();

function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottomTabNavigator">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="bottomTabNavigator"
          component={bottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ParticularScreen"
          component={ParticularScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigation;
