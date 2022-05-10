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
import { AntDesign } from "@expo/vector-icons";

import YoutubePlayer from "react-native-youtube-iframe";

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

  const [currentImage, setCurrentImage] = useState(0);

  function passNext() {
    if (currentImage < images.images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  }

  function passPrevious() {
    if (currentImage != 0) {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <View>
      <View style={styles.boxCarrosel}>
        <View style={styles.boxButton}>
          <TouchableOpacity onPress={() => passPrevious()} style={styles.button}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => passNext()} style={styles.buttonTwo}>
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          style={{ height: 200 }}
          source={{
            uri: images.images[currentImage]?.url,
          }}
        />
      </View>

      <YoutubePlayer height={300} play={false} videoId={"iee2TATGMyI"} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "flex-end",
    zIndex: 20,
    width: "100%",
    height: "100%",
  },

  button: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 50,
    height: "100%",
    // backgroundColor: "red",
  },

  buttonTwo: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 50,
    height: "100%",
    // backgroundColor: "red",
  },
});
