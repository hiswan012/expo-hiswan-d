import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const MultiIconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.header}>10 ikon dari 3 keluarga berbeda</Text>

      <View style={styles.iconGrid}>
        {/* antdesign icons */}
        <AntDesign name="API" size={30} color="#FF6B6B" />
        <AntDesign name="earth" size={30} color="#4ECDC4" />
        <AntDesign name="hourglass" size={30} color="#FFA500" />

        {/* entypo incns */}
        <Entypo name="leaf" size={30} color="#2ECC71" />
        <Entypo name="cake" size={30} color="#9B59B6" />
        <Entypo name="air" size={30} color="#2980B9" />

        {/* fontawesome icons */}
        <FontAwesome name="bicycle" size={30} color="#F39C12" />
        <FontAwesome name="bell" size={30} color="#34495E" />
        <FontAwesome name="book" size={30} color="#E74C3C" />
        <FontAwesome name="music" size={30} color="#1ABC9C" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#FDFEFE",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 20,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    rowGap: 20,
    columnGap: 25,
    width: "90%",
  },
});
export default MultiIconScreen;

