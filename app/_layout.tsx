import { Tabs } from "expo-router";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007BFF", // biru saat aktif
        tabBarInactiveTintColor: "#95A5A6",
        tabBarStyle: {
          backgroundColor: "#ECF0F1",
          borderTopWidth: 0,
          height: 60,
        },
        headerStyle: {
          backgroundColor: "#2C3E50",
        },
        headerTintColor: "#FFFFFF",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: "Home",
          headerTitle: "Beranda",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/about"
        options={{
          title: "About",
          headerTitle: "Tentang Aplikasi",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/profil"
        options={{
          title: "Profil",
          headerTitle: "Profil Saya",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
