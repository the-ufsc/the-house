import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen(props) {
  const house = {
    name: "Moradia 01",
    address: "Rua das Pedras, 58",
    price: "680,00",
    accommodations: 5,
    images: [
      "https://www.imovelweb.com.br/noticias/wp-content/uploads/2020/03/original-f6761ad4df0a26d3ed2cdf9d7d34d893.jpeg",
    ],
    gender: "man",
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Moradia: {house?.name}</Text>
      </View>
    </SafeAreaView>
  );
}
