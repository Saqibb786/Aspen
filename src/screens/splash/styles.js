import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
  },
  flex: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  subtextContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  btnContainer: {
    marginVertical: 20,
  },
  title: {
    color: "white",
    fontSize: 100,
  },
  subtext1: {
    color: "white",
    fontSize: 20,
    letterSpacing: 1.4,
    marginVertical: 4,
  },
  subtext2: {
    color: "white",
    letterSpacing: 1.4,
    fontSize: 28,
    fontWeight: "700",
    marginVertical: 4,
  },
});

export default styles;
