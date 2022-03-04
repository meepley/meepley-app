import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSnapshot } from "valtio";

import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "@ts/types/navigation/RootStack";

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
import MatchRoomScreen from "@screens/matchRoom/MatchRoomScreen";

import LogoTitle from "@components/common/LogoTitle";
import AppHeader from "@components/common/navigation/Header";
import authStore from "@services/store/authStore";

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

function RootNavigator() {
  const { isAuth, user } = useSnapshot(authStore);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <AppHeader
              navigation={navigation}
              options={options}
              back={back}
              title={title}
              isAuth={isAuth}
            />
          );
        },
      }}
    >
      {isAuth ? (
        // Screens for logged in users
        <Stack.Group>
          {!user?.did_finish_calibration ? (
            <Stack.Screen
              name="CalibrationOnboarding"
              component={OnboardingCalibration}
              options={{
                headerTitle: (props) => <LogoTitle />,
              }}
            />
          ) : null}

          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle />,
            }}
          />
          <Stack.Screen
            name="Place"
            component={PlaceScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CreateMatch"
            component={CreateMatchRoomScreen}
            options={{ title: "Criar partida", headerBackVisible: true }}
          />
          <Stack.Screen
            name="MatchRoom"
            component={MatchRoomScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "@martasilva95", headerBackVisible: true }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{ title: "Chat", headerBackVisible: true }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Definições", headerBackVisible: true }}
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

      <Stack.Screen
        name="BoardgamesList"
        component={BoardgamesListScreen}
        options={{
          headerTitle: () => <LogoTitle />,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="Boardgame"
        component={BoardgameScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Utilities"
        component={UtilitiesScreen}
        options={{
          headerTitle: () => <LogoTitle />,
          headerBackVisible: true,
        }}
      />

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
