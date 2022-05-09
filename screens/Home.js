import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
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
