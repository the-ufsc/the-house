import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The House</Text>
      </View>

      <Card style={styles.card}>
        <Card.Title title="First House" />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: "#FFF", display: "flex", alignItems: "center" },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
  },
});
