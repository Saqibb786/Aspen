import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressFunction}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
