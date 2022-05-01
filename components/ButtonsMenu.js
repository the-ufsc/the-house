import { TouchableOpacity, ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ButtonsMenu(props) {
  return (
    <SafeAreaView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="home" size={20} color="white" />
          <Text style={styles.textButton}>Inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="star" size={20} color="white" />
          <Text style={styles.textButton}>Favoritos</Text>
        </TouchableOpacity>
      </View>
      {/* {children} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#303030",
  },

  box: {
    display: "flex",
    alignItems: "center",
  },

  textButton: {
    fontWeight: "600",
    color: "white",
  },
});
