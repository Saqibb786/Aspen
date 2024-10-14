import { StyleSheet } from "react-native";
import * as Font from "expo-font";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  innerPadding: {
    paddingHorizontal: 30,
    flex:1,
    justifyContent: "start",
    alignItems: "center",
  },
  
  title: {
    paddingTop:50,
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Hiatus",
    justifyContent: "flex-start",
  },
  

  subtext1: {
    width: "100%",
    color: "#fff",
    fontSize: 25,
    marginTop: 10,
    textAlign: "left",
    textAlignmentsVertical: "bottom",
  },
  subtext2: {
    width: "100%",
    color: "#fff",
    fontSize: 30,
    marginTop: 10,
    textAlign: "left",
    textAlignmentsVertical: "bottom",
  },
});

export default styles;
