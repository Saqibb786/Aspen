import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// Dummy Screen
const DummyScreen = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text>Coming Soon</Text>
    </View>
  </SafeAreaView>
);

export default DummyScreen;

const styles = StyleSheet.create({});
