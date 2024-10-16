import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import POPULAR from "../../assets/data/Data";
import RECOMMENDED from "../../assets/data/Data";
import PopularItem from "../../components/PopularItem";
import RecommendedItem from "../../components/RecommendedItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
// Home Screen
const HomeScreen = () => (
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <FlatList
          horizontal
          data={POPULAR}
          renderItem={({ item }) => <PopularItem item={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <FlatList
          numColumns={2}
          data={RECOMMENDED}
          renderItem={({ item }) => <RecommendedItem item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  </SafeAreaView>
);

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f0f0f0",
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
    fontSize: 24,
    fontWeight: "light",
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: "black",
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  popularItem: {
    width: 150,
    marginRight: 12,
  },
  popularImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  popularOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  popularTitle: {
    color: "white",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    color: "white",
    fontSize: 12,
    marginLeft: 4,
  },
  recommendedItem: {
    flex: 1,
    margin: 4,
  },
  recommendedImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  recommendedOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  recommendedTitle: {
    color: "white",
    fontSize: 14,
  },
  recommendedContent: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
