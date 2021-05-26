import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Hoodie block colors",
    price: 100,
    image: require("../assets/sudadera_colores.jpg"),
  },
  {
    id: 2,
    title: "Sillon gamer",
    price: 3000,
    image: require("../assets/sillon_gamer.jpg"),
  },
  {
    id: 3,
    title: "Laptop",
    price: 3500,
    image: require("../assets/laptop.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
