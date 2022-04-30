import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const houses = [
    {
      name: "Moradia 01",
      address: "Rua das Pedras, 58",
      price: "680,00",
      accommodations: 5,
      images: [
        "https://www.imovelweb.com.br/noticias/wp-content/uploads/2020/03/original-f6761ad4df0a26d3ed2cdf9d7d34d893.jpeg",
      ],
      gender: "man",
    },
    {
      name: "Moradia 02",
      address: "Rua das Águas, 22",
      price: "480,00",
      accommodations: 6,
      images: [
        "https://vault.imob.online/resized/u0744/properties/photos/16504551/NiwaM3hgscyEVoYr5f8tmlAp-04.jpg/kxlarge.jpg",
      ],
      gender: "woman",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The House</Text>
      </View>

      {houses.map((house, index) => (
        <Card
          key={"house-" + index}
          onPress={() => navigation.navigate("Details", { house: house })}
          style={styles.card}
        >
          <Card.Title title={house.name} />
          <View>
            <Image
              style={{ height: 200 }}
              source={{
                uri: house.images[0],
              }}
            />
          </View>
          <View style={styles.infoBox}>
            <View style={styles.boxCard}>
              <Text>Endereço: {house.address}</Text>
              <Text>R$ {house.price}</Text>
              <Text>{house.accommodations} alojamentos</Text>
            </View>
            <Ionicons name={house.gender} size={32} color="black" />
          </View>
        </Card>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: "#FFF", display: "flex", alignItems: "center", padding: 10 },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

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
    marginVertical: 20,
    marginHorizontal: 10,
  },

  boxCard: {
    marginHorizontal: 15,
  },
});
