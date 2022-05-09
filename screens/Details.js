import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  FlatList,
} from "react-native";
import { formatCurrency } from "react-native-format-currency";
import MapView, { Marker, Callout } from "react-native-maps";
import { InteractionManager } from "react-native-web";
// import { useEffect } from "react/cjs/react.production.min";

export default function DetailsScreen(props) {
  const index = props.route.params.index;
  const house = props.route.params.house;

  const OnBoardingItem = ({ item }) => {
    console.log(item.item.url);
    return <Image source={{ uri: item.item.url }} style={styles.image} />;
  };

  // navigation.setOptions({
  //   headerTitle: house.name
  //   // Cannot update a component (`BottomTabNavigator`)
  //   // Add 'navigation' after 'props' in funct
  // })

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          <FlatList
            data={house.images}
            style={styles.image}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item?.key)}
            renderItem={(item) => <OnBoardingItem item={item} />}
          />
        </View>

        {/* <Image style={styles.image} source={{ uri: house.images[0].url }} /> */}
        <View style={styles.topBox}>
          <View>
            <View opacity={0.4}>
              <Text style={[styles.title, { fontSize: 20 }]}>Alojamento {house.type}</Text>
            </View>
            <View>
              <Text style={[styles.title, { fontSize: 30 }]}>
                {formatCurrency({ amount: house.price, code: "BRL" })[0]}
              </Text>
            </View>
          </View>
          <View style={styles.icons}>
            {house.gender === "both" ? (
              <MaterialCommunityIcons name="human-male-female" size={32} color="black" />
            ) : (
              <Ionicons name={house.gender} size={32} color="black" />
            )}
            <TouchableOpacity
            // onPress={()=>addFav(house)}
            >
              <MaterialCommunityIcons name="star-outline" size={60} color="orange" />
            </TouchableOpacity>
          </View>
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
              <TouchableOpacity onPress={() => Linking.openURL(`tel:${house.phone}`)}>
                <View style={styles.button}>
                  <Text style={{ fontSize: 24 }}>Ligar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`mailto:${house.email}`)}>
                <View style={styles.button}>
                  <Text style={{ fontSize: 24 }}>Mandar e-mail</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.mapBox}>
                <View>
                  <Text style={{ fontSize: 20 }}>Localização</Text>
                </View>
                <MapView
                  style={styles.mapStyle}
                  initialRegion={{
                    latitude: house.maps.latitude,
                    longitude: house.maps.longitude,
                    latitudeDelta: house.maps.latitudeDelta,
                    longitudeDelta: house.maps.longitudeDelta,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: house.maps.latitude,
                      longitude: house.maps.longitude,
                    }}
                    title={house.name}
                    description={house.address}
                  />
                </MapView>
              </View>
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
  mapBox: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingBottom: 10,
    margin: 5,
    width: 320,
    display: "flex",
    alignItems: "center",
  },
  mapStyle: {
    width: 300,
    height: 200,
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
