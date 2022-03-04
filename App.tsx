import React, { useEffect } from "react";
import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { NativeBaseProvider } from "native-base";

import Navigation from "@navigation/index";
import { nbConfig } from "@utils/config/nativeBaseConfig";
import theme from "@theme/index";
import { useSnapshot } from "valtio";
import authStore from "@services/store/authStore";

export default function App() {
  const { hydrateState, hydrated } = useSnapshot(authStore);
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  useEffect(() => {
    hydrateState();
  }, []);

  if (!fontsLoaded || !hydrated) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme} config={nbConfig}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Navigation />
          <StatusBar backgroundColor="white" />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}

AppRegistry.registerComponent("MeePley", () => App);
