import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Recommended Component
const RecommendedItem = ({ item, navigation }) => {
  const navigateToParticularScreen = () => {
    navigation.navigate("ParticularScreen", { item: item });
  };

  return (
    <TouchableOpacity
      onPress={navigateToParticularScreen}
      style={styles.container}
    >
      <View style={styles.recommendedItem}>
        <Image source={item.image} style={styles.recommendedImage} />
        <Text style={styles.recommendedContent}>{item.content}</Text>
        <View>
          <Text style={styles.recommendedTitle}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RecommendedItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  recommendedItem: {
    flex: 1,
    margin: 4,
    marginBottom: 24,
  },
  recommendedImage: {
    width: "100%",
    height: 110,
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
    color: "#111",
    fontSize: 14,
    fontWeight: "bold",

    marginTop: 6,
  },
  recommendedContent: {
    backgroundColor: "#444",
    color: "#fff",
    fontSize: 11,
    textAlign: "center",

    position: "absolute",
    bottom: 14,
    right: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,

    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
  },
});
