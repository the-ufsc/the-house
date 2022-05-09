import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import homes from "../database/homes.json";
import Filter from "../components/Filter";
import CardHouse from "../components/CardHouse";
import Carrosel from "../components/Carrosel";

export default function HomeScreen({ props, navigation }) {
  const houses = homes;

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  const [gender, setGender] = useState("any");

  function verify(house) {
    if (house.price >= min && house.price <= max && (gender === "any" || house.gender === gender)) {
      // console.log("achei");
      return house;
    } else {
      console.log(house);
      // console.log("NAIN");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Filter
          min={min}
          max={max}
          setMin={setMin}
          setMax={setMax}
          gender={gender}
          setGender={setGender}
        />

        <Carrosel />

        {houses?.filter(verify).map((house, index) => (
          <TouchableOpacity
            key={"house-" + index}
            onPress={() => navigation.navigate("Detalhes", { house: house, index: index })}
          >
            <CardHouse house={house} index={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0dede",
    marginTop: 10,
  },
});
