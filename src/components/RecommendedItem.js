import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";


// Recommended Component
const RecommendedItem = ({ item }) => (
  <View style={styles.recommendedItem}>
    <Image source={item.image} style={styles.recommendedImage} />
    <View style={styles.recommendedOverlay}>
      <Text style={styles.recommendedTitle}>{item.name}</Text>
      <Text style={styles.recommendedContent}>{item.content}</Text>
    </View>
  </View>
);
export default RecommendedItem;

const styles = StyleSheet.create({
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
