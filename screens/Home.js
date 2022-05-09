import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
=======
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import CardHouse from "../components/CardHouse";
import Filter from "../components/Filter";
>>>>>>> e1de60ffe1632a094c91825332ff084640f9aa41
import homes from "../database/homes.json";

export default function HomeScreen({ props, navigation }) {
  const houses = homes;

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000000);
  const [gender, setGender] = useState("any");

  function verify(house) {
    if (house.price >= min && house.price <= max && (gender === "any" || house.gender === gender)) {
      console.log("achei");
      return house;
    } else {
      console.log(house);
      console.log("NAIN");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Filter />
        {houses?.filter(verify).map((house, index) => (
          <TouchableOpacity
            key={"house-" + index}
            onPress={() => navigation.navigate("Detalhes", { house: house })}
          >
            <CardHouse house={house} index={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
<<<<<<< HEAD
    </SafeAreaView>
=======
    </View>
>>>>>>> e1de60ffe1632a094c91825332ff084640f9aa41
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0dede",
    marginTop: 10,
  },
});
