import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
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

import useCachedResources from "@utils/hooks/useCachedResources";
import Navigation from "@navigation/index";
import OnboardingInitial from "@screens/onboarding/OnboardingInitialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QueryClient, QueryClientProvider } from "react-query";
import { nbConfig } from "@utils/config/nativeBaseConfig";
import theme from "@theme/index";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

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
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </QueryClientProvider>
      </NativeBaseProvider>
    );
  }
}

AppRegistry.registerComponent("MeePley", () => App);
