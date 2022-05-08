import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
// import numbro from "numbro";

export default function CardHouse({ house }) {
  // const number = 123456.789;
  // numbro.setLanguage("fr-FR");
  // numbro.setLanguage("pt");
  // const aaa = numbro(23425.45).formatCurrency();
  // console.log(aaa);
  // console.log(number.setLanguage("fr-FR"));

  return (
    <Card style={styles.card}>
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
          <Text>
            <Text style={{ fontWeight: "bold" }}>Endereço: </Text>
            {house.address}
          </Text>
          <Text>
            R$ {house.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </Text>
          <Text>{house.accommodations} alojamentos</Text>
        </View>

        {house.gender === "both" ? (
          <MaterialCommunityIcons name="human-male-female" size={32} color="black" />
        ) : (
          <Ionicons name={house.gender} size={32} color="black" />
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
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
