import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// Popular Component
const PopularItem = ({ item, navigation }) => {
  const navigateToParticularScreen = () => {
    navigation.navigate("ParticularScreen");
  };
  return (
    <TouchableOpacity
      onPress={navigateToParticularScreen}
      style={styles.container}
    >
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.popularImage} />
        <View style={styles.popularOverlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.popularTitle}>{item.name}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={12} color="#FFD700" />
            <Text style={styles.ratingText}>{item.star}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  cardContainer: {
    width: 188,
    marginRight: 12,
  },
  popularImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  popularOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  titleContainer: {
    // paddingHorizontal: 4,
    // paddingVertical: 2,
    // justifyContent: "center",
    // alignItems: "center",
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
