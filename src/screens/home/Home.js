import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { POPULAR, RECOMMENDED } from "../../assets/data/Data";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import SearchBar from "../../components/SearchBar";
import PopularItem from "../../components/PopularItem";
import RecommendedItem from "../../components/RecommendedItem";
import CatergoryList from "../../components/CatergoryList";
// Home Screen
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Explore</Text>
          <View style={styles.flexDirection}>
            <FontAwesome
              style={{ alignSelf: "center", marginBottom: 18, marginRight: 10 }}
              name="map-marker"
              size={24}
              color="blue"
            />
            <Text style={styles.locationText}>Aspen, USA</Text>
            <FontAwesome
              style={{
                alignSelf: "center",
                marginBottom: 18,
                marginRight: 10,
                marginLeft: 10,
              }}
              name="angle-down"
              size={24}
              color="blue"
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 40, fontWeight: "500" }}>Aspen</Text>
        </View>
        <SearchBar />
        <CatergoryList />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <FlatList
            horizontal
            data={POPULAR}
            renderItem={({ item }) => (
              <PopularItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => String(item?.id)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ marginBottom: 8, flex: 1 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              marginBottom: 8,
              marginTop: 50,
            }}
          >
            Recommended
          </Text>
          <FlatList
            numColumns={2}
            data={RECOMMENDED}
            renderItem={({ item }) => <RecommendedItem item={item} />}
            keyExtractor={(item) => String(item?.id)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "light",
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: "black",
    marginBottom: 16,
  },
  section: {
    marginBottom: 8,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
});
