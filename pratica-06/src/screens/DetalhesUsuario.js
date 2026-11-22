import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DetalhesUsuario({ route, navigation }) {
  // Desestruturando o parametro recebido da navegacao
  const { nomeUsuario } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Perfil</Text>
      <Text style={styles.texto}>Bem-vindo, {nomeUsuario}!</Text>

      {/* Desafio: navegação programática de retorno */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  texto: { fontSize: 18, color: "#555" },
  botao: {
    marginTop: 24,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  textoBotao: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
