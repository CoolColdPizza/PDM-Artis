import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constans from "expo-constants";

function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight + 24,
    flex: 1,
  },
});

export default Screen;
