import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen(props) {
  // let house = props.navigation.getParam("house");
  // console.log("a", house);

  return (
    <SafeAreaView>
      <View>
        <Text>Moradia: {house?.name}</Text>
      </View>
    </SafeAreaView>
  );
}
