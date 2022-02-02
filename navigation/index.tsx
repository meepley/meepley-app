import React from "react";

import { ColorSchemeName, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "@theme/colors";
import useColorScheme from "@hooks/useColorScheme";

import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "@ts/types/navigation/RootStack";
import {
  RootTabParamList,
  RootTabScreenProps,
} from "@ts/types/navigation/RootTab";

/* screens */
import PlaceScreen from "@screens/PlaceScreen";
import ChatScreen from "@screens/ChatScreen";
import LoginScreen from "@screens/auth/LoginScreen";
import RegisterScreen from "@screens/auth/RegisterScreen";
import ProfileScreen from "@screens/ProfileScreen";
import BoardgamesListScreen from "@screens/boardgames/BoardgamesListScreen";
import CreateMatchRoomScreen from "@screens/matchRoom/CreateMatchRoomScreen";
import BoardgameScreen from "@screens/boardgames/BoardgameScreen";
import OnboardingCalibration from "@screens/onboarding/OnboardingCalibrationScreen";
import OnboardingInitial from "@screens/onboarding/OnboardingInitialScreen";
import UtilitiesScreen from "@screens/UtilitiesScreen";
import SettingsScreen from "@screens/SettingsScreen";
import NotFoundScreen from "@screens/NotFoundScreen";
import DashboardScreen from "@screens/DashboardScreen";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const isLoggedIn = false;

function RootNavigator() {
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        // Screens for logged in users
        <Stack.Group>
          <Stack.Screen
            name="CalibrationOnboarding"
            component={OnboardingCalibration}
          />
          <Stack.Screen
            name="CreateMatch"
            component={CreateMatchRoomScreen}
            options={{ title: "Criar partida" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
          <Stack.Screen name="Place" component={PlaceScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />

          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Definições" }}
          />
          {/* <Stack.Group screenOptions={{ presentation: "modal" }}></Stack.Group> */}
        </Stack.Group>
      ) : (
        // Auth screens
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="InitialOnboarding"
            component={OnboardingInitial}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      )}

      <Stack.Screen name="BoardgamesList" component={BoardgamesListScreen} />
      <Stack.Screen name="Boardgame" component={BoardgameScreen} />
      <Stack.Screen name="Utilities" component={UtilitiesScreen} />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />

      {/* Common modal screens */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={({ navigation }: RootTabScreenProps<"DashboardScreen">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Utilities"
        component={UtilitiesScreen}
        options={{
          title: "Utilidades",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CreateMatchroom"
        component={CreateMatchRoomScreen}
        options={{
          title: "Criar Partida",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
