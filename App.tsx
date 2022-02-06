import React from "react";
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
import { QueryClient, QueryClientProvider } from "react-query";

import Navigation from "@navigation/index";
import AuthContextProvider from "@utils/hooks/useAuthContext";
import { nbConfig } from "@utils/config/nativeBaseConfig";
import theme from "@theme/index";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme} config={nbConfig}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AuthContextProvider>
              <Navigation />
              <StatusBar />
            </AuthContextProvider>
          </SafeAreaProvider>
        </QueryClientProvider>
      </NativeBaseProvider>
    );
  }
}

AppRegistry.registerComponent("MeePley", () => App);
