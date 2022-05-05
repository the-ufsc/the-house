import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import home from "../database/homes.json";

export default function DetailsScreen(props) {
  const house = home[1];

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: house.images[0].url }} />
        <View style={styles.topBox}>
          <View>
            <View opacity={0.4}>
              <Text style={[styles.title, { fontSize: 20 }]}>Alojamento {house.type}</Text>
            </View>
            <View>
              <Text style={[styles.title, { fontSize: 30 }]}>R$ {house.price}</Text>
            </View>
          </View>
          <Ionicons name={house.gender} size={40} color="black" />
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoTitle}>
            <Text style={[{ textAlign: "center" }, { fontSize: 22 }]}>{house.address}</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.information}>•</Text>
            <Text style={styles.information}>Área: {house.area} m2</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.information}>•</Text>
            <Text style={styles.information}>Alojamentos: {house.accommodations}</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.information}>•</Text>
            <Text style={styles.information}>Banheiro: {house.bathroom}</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.information}>•</Text>
            <Text style={styles.information}>Mobília: {house.equipments}</Text>
          </View>
          <View style={styles.moreInfo}>
            <Text style={[styles.information]}>Descrição das áreas comuns:</Text>
            <Text style={styles.information}>{house.rooms_description}</Text>
          </View>
          <View style={styles.moreInfo}>
            <Text style={[styles.information]}>Informações adicionais:</Text>
            <Text style={styles.information}>{house.rooms_description}</Text>
          </View>
          <View style={styles.infoTitle}>
            <Text style={[{ textAlign: "center" }, { fontSize: 20 }]}>Contato</Text>
          </View>
          <View style={styles.contact}>
            <Text style={[styles.information]}>{house.phone}</Text>
            <Text style={[styles.information]}>{house.email}</Text>
          </View>

          <View style={styles.caixa}>
            <View style={styles.buttonsBox}>
              <TouchableOpacity onPress={() => Linking.openURL(`mailto:${house.email}`)}>
                <View style={styles.button}>
                  <Text>Mandar e-mail</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`tel:${house.phone}`)}>
                <View style={styles.button}>
                  <Text>Ligar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.canOpenURL(`https:${house.maps}`)}>
                <View style={styles.button}>
                  <Text>Mapa</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    width: "100%",
    backgroundColor: "#FFF",
  },

  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: "3%",
  },
  image: {
    width: "100%",
    height: 250,
  },

  title: {},
  infoBox: {
    padding: "4%",
    backgroundColor: "#DCDCDC",
  },
  infoTitle: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5%",
  },
  information: {
    fontSize: 17,
    margin: "1%",
  },
  infoText: {
    display: "flex",
    flexDirection: "row",
  },
  moreInfo: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  contact: {},
  caixa: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsBox: {
    margin: 20,
    display: "flex",
  },
  button: {
    margin: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#FFF",
  },
});
