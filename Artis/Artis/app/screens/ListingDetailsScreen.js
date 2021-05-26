import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.principalImage} source={listing.image} />
      <View style={styles.descriptionContainer}>
        {/* Texto de la imagen */}
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        {/* Información del usuario */}
        <ListItem
          image={require("../assets/Sergio.jpg")}
          title="Sergio José Vázquez Aguayo"
          subTitle="9 publicaciones"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  principalImage: {
    width: "100%",
    height: 300,
    marginBottom: 8,
    backgroundColor: "#f8fbf2",
  },
  descriptionContainer: {
    padding: 32,
    marginBottom: 8,
  },
});

export default ListingDetailsScreen;
