import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../assets/data/Data";

const CategoryList = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      {CATEGORIES.map((item, index) => {
        return index === selected ? (
          <TouchableOpacity>
            <Text style={[styles.text, styles.selectedText]}>{item}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Text style={styles.text} onPress={() => setSelected(index)}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 18,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: "#B8B8B8",
  },
  selectedText: {
    color: "blue",
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#176FF20D",
    borderRadius: 50,
  },
});
