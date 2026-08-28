import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

// Combinações vencedoras (índices do array de 9 posições)
const COMBINACOES_VITORIA = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function verificarVencedor(tabuleiro) {
  for (const [a, b, c] of COMBINACOES_VITORIA) {
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      return tabuleiro[a]; // "X" ou "O"
    }
  }
  if (tabuleiro.every((celula) => celula !== null)) {
    return "EMPATE";
  }
  return null;
}

export default function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState("X");
  const [vencedor, setVencedor] = useState(null);

  function jogar(indice) {
    // Impede jogada em célula ocupada ou depois do fim do jogo
    if (tabuleiro[indice] || vencedor) {
      return;
    }

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    const resultado = verificarVencedor(novoTabuleiro);
    if (resultado) {
      setVencedor(resultado);
      const mensagem = resultado === "EMPATE" ? "Deu velha! 🤝" : `Jogador ${resultado} venceu! 🎉`;
      Alert.alert("Fim de jogo", mensagem);
    } else {
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  }

  function reiniciarJogo() {
    setTabuleiro(Array(9).fill(null));
    setJogadorAtual("X");
    setVencedor(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Velha</Text>

      <Text style={styles.status}>
        {vencedor
          ? vencedor === "EMPATE"
            ? "Empate!"
            : `Vencedor: ${vencedor}`
          : `Vez do jogador: ${jogadorAtual}`}
      </Text>

      <View style={styles.tabuleiro}>
        {[0, 1, 2].map((linha) => (
          <View key={linha} style={styles.linha}>
            {[0, 1, 2].map((coluna) => {
              const indice = linha * 3 + coluna;
              return (
                <TouchableOpacity
                  key={indice}
                  style={styles.celula}
                  activeOpacity={0.6}
                  onPress={() => jogar(indice)}
                >
                  <Text
                    style={[
                      styles.textoCelula,
                      tabuleiro[indice] === "X" && styles.textoX,
                      tabuleiro[indice] === "O" && styles.textoO,
                    ]}
                  >
                    {tabuleiro[indice]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.botaoReiniciar} activeOpacity={0.7} onPress={reiniciarJogo}>
        <Text style={styles.textoBotaoReiniciar}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const TAMANHO_CELULA = 90;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14325A",
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: "#505050",
    marginBottom: 15,
  },
  tabuleiro: {
    // flexDirection padrão "column": empilha as 3 linhas
    borderWidth: 2,
    borderColor: "#14325A",
  },
  linha: {
    flexDirection: "row",
  },
  celula: {
    width: TAMANHO_CELULA,
    height: TAMANHO_CELULA,
    borderWidth: 1,
    borderColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
  },
  textoCelula: {
    fontSize: 36,
    fontWeight: "bold",
  },
  textoX: {
    color: "#0064A0", // ProAccent
  },
  textoO: {
    color: "#B00020",
  },
  botaoReiniciar: {
    marginTop: 20,
    backgroundColor: "#0064A0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotaoReiniciar: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
