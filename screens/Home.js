import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Filter from "../components/Filter";
import homes from "../database/homes.json";

export default function HomeScreen({ props, navigation }) {
  const houses = homes;

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [gender, setGender] = useState("any");

  function verifyFilter(house) {
    if (house.min >= min && house.max <= max && (gender === "any" || house.gender === gender)) {
      return house;
    }
  }

  function testFilter() {
    console.log(houses.filter(verify));
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Filter />
        <TouchableOpacity onPress={() => testFilter()}>
          <Text>CLICK ME</Text>
        </TouchableOpacity>
        {houses?.map((house, index) => (
          <Card
            key={"house-" + index}
            onPress={() => navigation.navigate("Detalhes", { house: house })}
            style={styles.card}
          >
            <Card.Title title={house.name} />
            <View>
              <Image
                style={{ height: 200 }}
                source={{
                  uri: house.images[0].url,
                }}
              />
            </View>
            <View style={styles.infoBox}>
              <View style={styles.boxCard}>
                <Text>Endereço: {house.address}</Text>
                <Text>R$ {house.price.toString()}</Text>
                <Text>{house.accommodations} alojamentos</Text>
              </View>

              {house.gender === "both" ? (
                <MaterialCommunityIcons name="human-male-female" size={32} color="black" />
              ) : (
                <Ionicons name={house.gender} size={32} color="black" />
              )}
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  infoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },

  card: {
    marginVertical: 5,
    marginHorizontal: 10,
  },

  boxCard: {
    marginHorizontal: 15,
  },
});
