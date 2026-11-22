import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import api from "../services/api";

export default function NovoUtilizador() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviar = async () => {
    if (!nome.trim() || !email.trim()) {
      Alert.alert("Atenção", "Preencha o nome e o email.");
      return;
    }
    setEnviando(true);
    try {
     
      const resposta = await api.post("/users", { name: nome, email });
      Alert.alert("Sucesso", `Utilizador criado com o id ${resposta.data.id}.`);
      setNome("");
      setEmail("");
    } catch (erro) {
      Alert.alert("Erro", `Não foi possível criar o utilizador: ${erro.message}`);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Utilizador</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.botao} onPress={enviar} disabled={enviando}>
        {enviando ? <ActivityIndicator color="#FFF" /> : <Text style={styles.textoBotao}>Enviar</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 50, paddingHorizontal: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#14325A" },
  input: { backgroundColor: "#FFF", padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: "#E0E0E0" },
  botao: { backgroundColor: "#14325A", padding: 14, borderRadius: 8, alignItems: "center" },
  textoBotao: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
});
