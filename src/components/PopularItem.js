import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

// Popular Component
const PopularItem = ({ item }) => (
  <View style={styles.popularItem}>
    <Image source={item.image} style={styles.popularImage} />
    <View style={styles.popularOverlay}>
      <Text style={styles.popularTitle}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={12} color="#FFD700" />
        <Text style={styles.ratingText}>{item.star}</Text>
      </View>
    </View>
  </View>
);

export default PopularItem;

const styles = StyleSheet.create({
  popularItem: {
    width: 188,
    marginRight: 12,
    height: 240,
  },
  popularImage: {
    width: "100%",
    height: 240,
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
});
