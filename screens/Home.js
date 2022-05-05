import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "../components/Filter";
// import ButtonsMenu from "../components/ButtonsMenu";
import homes from "../database/homes.json";

export default function HomeScreen({ navigation }) {
  const houses = homes;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Filter />
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
                <Text>R$ {house.price}</Text>
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
