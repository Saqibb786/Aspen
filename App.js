import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RootStackNavigation from "./src/navigation/RootStackNavigation";
import ParticularScreen from "./src/screens/particularScreen/ParticularScreen";

const App = () => {
  return (
    <RootStackNavigation />
    // <ParticularScreen />
  );
};

export default App;

const styles = StyleSheet.create({});
