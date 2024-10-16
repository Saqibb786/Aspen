import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Recommended Component
const RecommendedItem = ({ item }) => (
  <View style={styles.recommendedItem}>
    <Image source={{ uri: item.image }} style={styles.recommendedImage} />
    <View style={styles.recommendedOverlay}>
      <Text style={styles.recommendedTitle}>{item.name}</Text>
      <Text style={styles.recommendedContent}>{item.content}</Text>
    </View>
  </View>
);

export default RecommendedItem;

const styles = StyleSheet.create({});
