import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useCallback } from "react";
import Slider from "@react-native-community/slider";
import { formatCurrency } from "react-native-format-currency";
import { RadioButton } from "react-native-paper";

export default function Filter({ min, setMin, max, setMax, gender, setGender }) {
  const [open, setOpen] = useState(true);

  function verifyMin(value) {
    if (value > max) setMax(5000);
    setMin(value);
  }

  function verifyMax(value) {
    if (max < min) setMin(0);
    setMax(value);
  }

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
              <Text>Valor Máximo: {formatCurrency({ amount: max, code: "BRL" })[0]}</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={5000}
                step={10}
                minimumTrackTintColor="#17fc03"
                maximumTrackTintColor="#000000"
                thumbTintColor="#17fc03"
                onValueChange={(value) => verifyMax(value)}
                value={max}
              />
            </View>

            <View style={styles.box}>
              <Text>Valor Mínimo: {formatCurrency({ amount: min, code: "BRL" })[0]}</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={5000}
                step={10}
                minimumTrackTintColor="#17fc03"
                maximumTrackTintColor="#000000"
                thumbTintColor="#17fc03"
                onValueChange={(value) => verifyMin(value)}
                value={min}
              />
            </View>

            <View style={styles.box}>
              <Text> Genero: </Text>
              <View style={styles.boxCheck}>
                <RadioButton
                  color="#17fc03"
                  value="any"
                  status={gender === "any" ? "checked" : "unchecked"}
                  onPress={() => setGender("any")}
                />
                <Text onPress={() => setGender("any")} style={styles.textCheck}>
                  Tanto faz!
                </Text>
              </View>

              <View style={styles.boxCheck}>
                <RadioButton
                  color="#17fc03"
                  value="both"
                  status={gender === "both" ? "checked" : "unchecked"}
                  onPress={() => setGender("both")}
                />
                <Text onPress={() => setGender("both")} style={styles.textCheck}>
                  {" "}
                  Ambos
                </Text>
              </View>

              <View style={styles.boxCheck}>
                <RadioButton
                  color="#17fc03"
                  value="man"
                  status={gender === "man" ? "checked" : "unchecked"}
                  onPress={() => setGender("man")}
                />
                <Text onPress={() => setGender("man")} style={styles.textCheck}>
                  Masculina
                </Text>
              </View>

              <View style={styles.boxCheck}>
                <RadioButton
                  color="#17fc03"
                  value="woman"
                  status={gender === "woman" ? "checked" : "unchecked"}
                  onPress={() => setGender("woman")}
                />
                <Text onPress={() => setGender("woman")} style={styles.textCheck}>
                  Feminina
                </Text>
              </View>
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
  },

  boxCheck: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  textCheck: {
    display: "flex",
    fontSize: 15,
    // fontWeight: "bold",
    marginBottom: 5,
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
