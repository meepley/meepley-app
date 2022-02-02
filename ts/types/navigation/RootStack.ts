/**
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackParamList = {
  CalibrationOnboarding: undefined;
  CreateMatch: undefined;
  Profile: undefined;
  Dashboard: undefined;
  Place: undefined;
  Chat: undefined;
  Settings: undefined;
  InitialOnboarding: undefined;
  Login: undefined;
  Register: undefined;
  BoardgamesList: undefined;
  Boardgame: undefined;
  Utilities: undefined;
  Modal: undefined;
  NotFound: undefined;
};
