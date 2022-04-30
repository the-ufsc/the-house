import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import home from '../database/homes.json'

export default function DetailsScreen(props) {
  const house = home[1]

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: house.images[0].url,}}
        />
        <View style={styles.topBox}>
          <View>
            <View opacity={0.4}>
              <Text style={[styles.title, {fontSize: 20}]}>Alojamento {house.type}</Text>
            </View>
            <View>
              <Text style={[styles.title, {fontSize: 30}]}>R$ {house.price}</Text>
            </View>
          </View>
          <Ionicons name={house.gender} size={40} color="black" />
        </View>
        <View style={styles.infoBox}>
          <View style={styles.address}>
            <Text style={[{textAlign: 'center'}, {fontSize: 22}]}>{house.address}</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  topBox:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: '3%'
  },
  image:{
    width:'100%',
    height: 250,
  },

  title:{
  },
  infoBox:{
    padding:'4%',
    backgroundColor:'#DCDCDC',
  },
  address:{
    display: "flex", alignItems: "center",
    marginBottom:'5%'
  },
  information:{
    fontSize:17,
    margin:'1%',
  },
  infoText:{
    display: "flex",
    flexDirection: "row",
  },
  moreInfo:{
    marginTop:'3%',
    marginBottom:'3%',
  }
})