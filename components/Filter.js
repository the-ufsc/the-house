import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useCallback } from "react";

export default function Filter() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity>
          {!open ? (
            <MaterialCommunityIcons
              onPress={() => setOpen(true)}
              name="menu"
              size={32}
              color="black"
            />
          ) : (
            <>
              <MaterialCommunityIcons
                onPress={() => setOpen(false)}
                name="menu-down"
                size={40}
                color="black"
              />
              <Text>Filtros</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {open && (
        <View>
          <View style={styles.container}>
            <View style={styles.box}>
              <Text>Valor Mínimo:</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#b89128",
  },

  box: {
    display: "flex",
    alignItems: "center",
  },

  menu: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
});
