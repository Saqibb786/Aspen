import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import React from "react";


const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    width:"100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
