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

export default function Carrosel() {
  const images = {
    images: [
      { key: 1, url: "https://i.ytimg.com/vi/SrfIRlUmLQM/hqdefault.jpg" },
      {
        key: 2,
        url: "https://www.decorfacil.com/wp-content/uploads/2017/07/20170720decoracao-de-casas-pequenas-1.jpg",
      },
    ],
  };

  const [currentImage, setCurrentImage] = useState(images.images[0]);

  console.log(currentImage);

  return (
    <View>
      <View style={styles.boxCarrosel}>
        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.button}>
            <Text>.</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ height: 200 }}
          source={{
            uri: currentImage?.url,
          }}
        />
        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text>.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxCarrosel: {
    margin: 10,
  },

  boxButton: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    zIndex: 20,
    width: "100%",
    height: "100%",
  },

  button: {
    position: "absolute",
    zIndex: 20,
    width: 20,
    height: 20,
    backgroundColor: "blue",
  },

  buttonTwo: {
    position: "absolute",
    margin: 200,
    zIndex: 20,
    width: 20,
    height: 20,
    backgroundColor: "green",
  },
});
