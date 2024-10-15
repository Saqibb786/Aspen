import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import Home from "../screens/home/Home";
import Splash from "../screens/splash/Splash";
import ParticularScreen from "../screens/particularScreen/ParticularScreen";

const Stack = createNativeStackNavigator();

function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ParticularScreen">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
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
