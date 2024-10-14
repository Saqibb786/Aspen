import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import React from "react";


const Button = ({btnText,onPressFunction}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressFunction}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(23, 111, 242, 1)",
    padding: 14,
    width:"100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    color: "white"
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
