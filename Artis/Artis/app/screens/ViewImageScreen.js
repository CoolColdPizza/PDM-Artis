// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.buttonClose}
        name="close"
        size={40}
        color="#fff"
      />
      <MaterialCommunityIcons
        style={styles.buttonDelete}
        name="trash-can-outline"
        size={40}
        color="#fff"
      />
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose: {
    top: 50,
    left: 30,
    position: "absolute",
  },
  buttonDelete: {
    top: 50,
    right: 30,
    position: "absolute",
  },
  image: {
    height: 500,
    width: "100%",
  },
});

export default ViewImageScreen;
