import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Em produção, uma chave de API não deveria morar direto no código do
// app (dá pra extrair de qualquer APK/IPA instalado). Aqui, como é uma
// API pública de estudo, deixamos direto no código pra simplificar.
const API_KEY = "cv_iSzPVi1qJ50BETTWf79DzoKDbDH9X0TfJzDPDZWz4L2z2yqAcKXAYVRJu9yR32A0";

// Uma instância única do axios com a base URL e o header já configurados.
// Toda chamada feita com "api" já sai com a chave certa — inclusive o GET,
// mesmo ele sendo público nesta API.
const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

// ---------- GET: listar heróis ----------
export default function JogosListarScreen() {
  const [Jogos, setJogos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  async function buscarJogos() {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await api.get("/api/jogos", {
        params: { limit: 50 },
      });

      setJogos(resposta.data.data);
    } catch (e) {
      setErro("Não foi possível carregar os jogos. Tenta de novo em instantes.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarJogos();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Listar jogos</Text>
          <Text style={styles.subtitulo}>GET /api/jogos</Text>
        </View>

        {carregando && <ActivityIndicator style={{ marginVertical: 16 }} />}
        {erro && <Text style={styles.erro}>{erro}</Text>}

        {!carregando &&
          Jogos.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.imagem} />
              <View style={styles.info}>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.categoria}>
                  {item.universo} · {item.poder}
                </Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8fbff" },
  conteudo: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 16 },
  tituloPagina: { fontSize: 24, fontWeight: "800", color: "#102542" },
  subtitulo: { fontSize: 14, color: "#5f6b7a", marginTop: 2 },

  erro: { color: "#c62828", marginTop: 12 },
  card: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  imagem: { width: 64, height: 64 },
  info: { flex: 1, justifyContent: "center", paddingRight: 12 },
  titulo: { fontSize: 16, fontWeight: "700" },
  categoria: { fontSize: 13, color: "#64748b" },
});