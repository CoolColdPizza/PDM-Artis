import React from "react";
import colors from "../config/colors";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function AppCard({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.Card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 7,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default AppCard;
