import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// Popular Component
const PopularItem = ({ item, navigation }) => {
  const navigateToParticularScreen = () => {
    navigation.navigate("ParticularScreen", { item: item });
  };
  return (
    <TouchableOpacity
      onPress={navigateToParticularScreen}
      style={styles.container}
    >
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.popularImage} />
        <View style={styles.detailsContainer}>
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
    height: 248,
    marginRight: 12,
  },
  popularImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  detailsContainer: {
    position: "absolute",
    bottom: 12,
    left: 10,
  },
  titleContainer: {
    // width: "100%",
  },
  popularTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    paddingHorizontal: 6,
    paddingVertical: 6,

    backgroundColor: "#444",
    color: "#fff",
    fontSize: 12,
    borderRadius: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    marginTop: 5,
    paddingHorizontal: 4,
    paddingVertical: 4,

    width: "60%",
    backgroundColor: "#444",
    color: "#fff",
    fontSize: 11,
    borderRadius: 12,
  },
  ratingText: {
    color: "white",
    fontSize: 12,
    marginLeft: 4,
  },
});
