import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import starWarImg from "@/assets/images/star-wars.jpeg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={starWarImg}
        resizeMode="center"
        style={styles.image}
      >
        <Text style={styles.text}>Star Wars</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
