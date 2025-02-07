import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

const contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Have you come to destroy me Obi-Wan</Text>
      <Link href="/" style={styles.link} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default contact;

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
  link: {
    marginHorizontal: "auto",
  },
  button: {
    height: 48,
    padding: 4,
    borderRadius: 12,
    backgroundColor: "red",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
});
