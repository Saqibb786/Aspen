import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Button from "../../components/Button";

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
        <View style={styles.innerPadding}>
          <Text style={styles.title}>Aspen</Text>
          <Text style={styles.subtext1}>Plan your </Text>
          <Text style={styles.subtext2}>Luxurious </Text>
          <Text style={styles.subtext2}>Vacation</Text>
          <Button btnText="Explore"/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
