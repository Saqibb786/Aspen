import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

const Splash = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("../../assets/Splash_background.png")}
        style={styles.background}
      >
        <Text style={styles.text}>Welcome to the App</Text>
      </ImageBackground>
    </View>
  );
};

export default Splash;
