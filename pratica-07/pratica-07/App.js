import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaUtilizadores from "./src/screens/ListaUtilizadores";
import NovoUtilizador from "./src/screens/NovoUtilizador";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Utilizadores" component={ListaUtilizadores} />
        <Tab.Screen name="Novo" component={NovoUtilizador} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
