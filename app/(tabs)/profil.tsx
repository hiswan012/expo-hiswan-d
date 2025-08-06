import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function ProfilScreen() {
  return (
    <View style={styles.wrapper}>
      {/* Foto Profil */}
      <Image
        source={require("../../assets/images/profil.jpg")}
        style={styles.photo}
      />
      
      {/* Data Diri */}
      <Text style={styles.name}>Hiswan Halim</Text>
      <Text style={styles.info}>NIM: 105841112722</Text>
      <Text style={styles.info}>Kelas: 6-D</Text>
      <Text style={styles.info}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.info}>Fakultas: Teknik</Text>

      {/* Sosial Media Horizontal */}
      <View style={styles.socialContainer}>
        <View style={styles.socialItem}>
          <AntDesign name="instagram" size={22} color="#C13584" style={styles.icon} />
          <Text style={styles.socialText}>@hiswanhzz</Text>
        </View>
        <View style={styles.socialItem}>
          <FontAwesome name="facebook-official" size={22} color="#1877F2" style={styles.icon} />
          <Text style={styles.socialText}>Hiswan</Text>
        </View>
        <View style={styles.socialItem}>
          <AntDesign name="github" size={22} color="#333" style={styles.icon} />
          <Text style={styles.socialText}>hiswan012</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#2C3E50",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "#34495E",
    marginBottom: 5,
  },
  socialContainer: {
    flexDirection: "row",           // Bikin horizontal
    justifyContent: "space-between", // Jarak sama rata
    width: "90%",
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  socialItem: {
    alignItems: "center", // Ikon dan teks sejajar tengah
    flex: 1,              // Biar rata bagiannya
  },
  icon: {
    marginBottom: 5, // Biar teks ada jarak dari ikon
  },
  socialText: {
    fontSize: 14,
    color: "#2C3E50",
  },
});
