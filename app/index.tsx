import React from "react";
import { ScrollView, Text, View, Dimensions, StyleSheet } from "react-native";

const TOTAL_STAMBUK = 105841112722;
const PATOKAN = 2; //bisa diubah

const MAHASISWA = [
  { nama: "Hiswan", font: "ubuntu" },
  { nama: "Asyap", font: "OpenSansCondensed" },
  { nama: "Atta Halilintar", font: "roboto" },
  { nama: "Irsyad", font: "openSans" },
  { nama: "Alryadi", font: "inter" },
  { nama: "Sanjaya", font: "bitcount" },
  { nama: "Ari", font: "RobotoItalic" },
  { nama: "Abdul", font: "spaceMonoBold" },
  { nama: "Ma'ruf Amin", font: "robotoCondensed" },
  { nama: "Yudis", font: "openSansWide" },
];

// Fungsi untuk dapatkan urutan mundur & maju secara melingkar
const generateUrutan = (patokan: number) => {
  const sebelum: number[] = [];
  const sesudah: number[] = [];

  // Mundur 5 langkah
  for (let i = 1; i <= 5; i++) {
    let idx = patokan - i;
    if (idx <= 0) idx = TOTAL_STAMBUK + idx;
    sebelum.push(idx);
  }

  // Maju 5 langkah
  for (let i = 1; i <= 5; i++) {
    let idx = patokan + i;
    if (idx > TOTAL_STAMBUK) idx = idx - TOTAL_STAMBUK;
    sesudah.push(idx);
  }

  return { sebelum, sesudah };
};

export default function Index() {
  const { sebelum, sesudah } = generateUrutan(PATOKAN);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nama Mahasiswa</Text>

      <Text style={styles.subTitle}>Sebelum Stambuk : {TOTAL_STAMBUK}</Text>
      {sebelum.map((no, idx) => (
        <View style={styles.card} key={`sbl-${no}`}>
          <Text style={[styles.namaText, { fontFamily: MAHASISWA[idx].font }]}>
            {MAHASISWA[idx].nama}
          </Text>
        </View>
      ))}

      <Text style={styles.subTitle}>Sesudah Stambuk : {TOTAL_STAMBUK}</Text>
      {sesudah.map((no, idx) => (
        <View style={styles.card} key={`ssd-${no}`}>
          <Text
            style={[
              styles.namaText,
              { fontFamily: MAHASISWA[idx + 5].font },
            ]}
          >
            {MAHASISWA[idx + 5].nama}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Style
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f4f8",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.04,
    alignItems: "center",
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "500",
    color: "#1e293b",
    marginBottom: 50,
    textAlign: "center",
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: width * 0.04,
    fontWeight: "400",
    marginTop: 20,
    marginBottom: 12,
    alignSelf: "flex-start",
    color: "#475569",
  },
  card: {
    width: width * 0.95,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 18,

    backgroundColor: "#587686ff",
    borderWidth: 1,
    borderColor: "#e2e8f0",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  namaText: {
    fontSize: width * 0.03,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  },
});

