import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import Splash from "../screens/splash/Splash";
import ParticularScreen from "../screens/particularScreen/ParticularScreen";
import BottomTabNavigator from "../navigation/BottomTabNavigation";
import HomeScreen from "../screens/home/Home";

const Stack = createNativeStackNavigator();

function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
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
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigation;
