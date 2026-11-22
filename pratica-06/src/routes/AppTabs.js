import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Configuracoes from "../screens/Configuracoes";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarIcon: ({ color, size, focused }) => {
          const nome =
            route.name === "Início"
              ? focused ? "home" : "home-outline"
              : focused ? "settings" : "settings-outline";
          return <Ionicons name={nome} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Ajustes" component={Configuracoes} />
    </Tab.Navigator>
  );
}
