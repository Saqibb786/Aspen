import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View style={styles.flex}>
      <SafeAreaView style={styles.flex}>
        <Text>Home</Text>
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
});
