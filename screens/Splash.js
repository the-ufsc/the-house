import React from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen({ navigation }) {
  async function load() {
    // simula um carregamento de 2s
    await new Promise((r) => setTimeout(r, 2000));
    navigation.navigate("Home");
  }

  // executa ao renderizar
  useEffect(() => {
    load();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={require("../assets/house.png")} />
        <Text style={styles.text}>The House</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },

  image: {
    width: 120,
    height: 120,
  },

  text: {
    color: "#FFF",
    fontSize: 60,
  },
});
