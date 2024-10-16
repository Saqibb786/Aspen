import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// Dummy Screen
const DummyScreen = () => (
  <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Coming Soon...</Text>
      </View>
    </SafeAreaView>
  </View>
);

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
