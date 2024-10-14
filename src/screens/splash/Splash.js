import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
  
  let [fontsLoaded] = useFonts({
    Hiatus: require("../../assets/fonts/Hiatus.ttf"),
  });

  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.flex}>
        <ImageBackground
          source={require("../../assets/Splash_background.png")}
          style={styles.background}
        >
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Aspen</Text>
            </View>
            <View style={styles.subtextContainer}>
              <Text style={styles.subtext1}>Plan your </Text>
              <Text style={styles.subtext2}>Luxurious </Text>
              <Text style={styles.subtext2}>Vacation</Text>
              <View style={styles.btnContainer}>
                <Button btnText="Explore" onPressFunction={goToHomeScreen} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default Splash;
