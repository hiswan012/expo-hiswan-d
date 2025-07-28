import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
 // Static fonts
 inter: require("../assets/fonts/Inter_24pt-Light.ttf"),
 bitcount: require("../assets/fonts/Bitcount_Cursive-Medium.ttf"),
 RobotoItalic: require("../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
 spaceMonoBold: require("../assets/fonts/SpaceMono-Regular.ttf"),
 ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),

 // Variable fonts
 roboto: require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
 spaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
 openSans: require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
 robotoCondensed: require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
 openSansWide: require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
}
