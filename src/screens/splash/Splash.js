import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const Splash = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    </View>
  );
};

export default Splash;
