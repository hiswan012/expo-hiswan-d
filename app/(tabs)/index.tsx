import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image
        source={require("../../assets/images/unismuh.jpg")}
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        Unismuh Makassar adalah salah satu universitas swasta unggulan di
        Sulawesi Selatan. Kampus ini terletak di Jalan Sultan Alauddin dan
        dikenal dengan suasana akademik yang religius sekaligus modern.
      </Text>
      <Text style={styles.paragraph}>
        Visi kampus adalah mencetak lulusan profesional, berintegritas, dan
        mampu bersaing di tingkat nasional maupun internasional.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: "#F8F9FA",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 600,
    height: 360,
    borderRadius: 12,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "#34495E",
    textAlign: "justify",
    marginBottom: 12,
    lineHeight: 22,
  },
});
