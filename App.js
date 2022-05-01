import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "./screens/Splash";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#303030",
            },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Inicial") {
                iconName = "home";
              } else if (route.name === "Detalhes") {
                iconName = "information-circle";
              } else if (route.name === "Favoritos") {
                iconName = "star";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Inicial" component={HomeScreen} />
          <Tab.Screen name="Detalhes" component={DetailsScreen} />
          <Tab.Screen name="Favoritos" component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
