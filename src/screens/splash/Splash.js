import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Splash = () => {
  let [fontsLoaded] = useFonts({
    Hiatus: require("../../assets/fonts/Hiatus.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("../../assets/Splash_background.png")}
        style={styles.background}
      >
        <Text style={styles.text}>Aspen</Text>
      </ImageBackground>
    </View>
  );
};

export default Splash;
