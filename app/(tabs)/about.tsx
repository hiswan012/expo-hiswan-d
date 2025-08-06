import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.paragraph}>
        Aplikasi ini dibuat sebagai pemenuhan tugas lab Aplikasi Komputasi Bergerak (AKB). Tujuannya adalah memperkenalkan navigasi tab bar menggunakan
        Expo Router.
      </Text>
      <Text style={ styles.subTitle}>Fungsi Halaman:</Text>
      <Text style={styles.list}>• Home: Menyajikan informasi singkat tentang kampus Unismuh Makassar.</Text>
      <Text style={styles.list}>• About: Memberikan gambaran tentang tujuan pembuatan aplikasi ini.</Text>
      <Text style={styles.list}>• Profil: Memuat data diri pembuat aplikasi beserta foto profil.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 15,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#34495E",
    lineHeight: 22,
    marginBottom: 15,
    textAlign: "justify",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
  },
  list: {
    fontSize: 16,
    color: "#2C3E50",
    marginBottom: 6,
  },
});
