import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={26} color="grey" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Find things to do"
        // value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 16,
    marginTop: 24,
    backgroundColor: "rgba(243, 248, 254, 1)",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },
});

export default SearchBar;
