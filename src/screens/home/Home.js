import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const Home = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.flex}>
      <SafeAreaView style={styles.flex}>
        <View>
          <Text style={styles.subtitle}>Explore</Text>
          <Text style={styles.title}>Aspen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgTest: {
    backgroundColor: "red",
  },
  subtitle: {
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Montserrat_400Regular",
  },
});
