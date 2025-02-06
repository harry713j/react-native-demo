import { View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Have you come to destroy me Obi-Wan</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "orange",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
});
