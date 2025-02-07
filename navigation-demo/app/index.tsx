import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

const app = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Star Wars</Text>
      <Link style={styles.link} href="/(tabs)">
        Main
      </Link>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
  },
  link: {
    textAlign: "center",
    color: "blue",
    fontSize: 24,
    textDecorationLine: "underline",
  },
});
