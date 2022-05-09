import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Card } from "react-native-paper";
import CardFavorites from "../components/CardFavorites";
import Filter from "../components/Filter";
import homes from "../database/homes.json";

export default function Favorites({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text>Texto</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
