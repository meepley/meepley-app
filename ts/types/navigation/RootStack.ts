/**
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IBoardgame } from "@ts/interfaces/IBoardgame";

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackParamList = {
  CalibrationOnboarding: undefined;
  CreateMatch: undefined;
  MatchRoom: { title: string; match: any };
  Profile: undefined;
  Dashboard: undefined;
  Place: undefined;
  Chat: undefined;
  Settings: undefined;
  InitialOnboarding: undefined;
  Login: undefined;
  Register: undefined;
  BoardgamesList: undefined;
  Boardgame: { boardgameId: string; boardgame: IBoardgame };
  Utilities: undefined;
  Modal: undefined;
  NotFound: undefined;
};
