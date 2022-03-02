/**
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IBoardgame } from "@ts/interfaces/IBoardgame";
import { IMatchRoom } from "@ts/interfaces/IMatchRoom";

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackParamList = {
  CalibrationOnboarding: undefined;
  CreateMatch: undefined;
  MatchRoom: { matchRoom: IMatchRoom };
  Profile: undefined;
  Dashboard: undefined;
  Place: {
    place: {
      id: number;
      address: string;
      name: string;
      type: string[];
      latlng: {
        latitude: number;
        longitude: number;
      };
      daysOpen: string;
      hoursOpen: string;
      matches: IMatchRoom[];
      minimum_consumption: number | null;
      img: string;
      averageRating: number;
      city: string;
    };
  };
  Chat: undefined;
  Settings: undefined;
  InitialOnboarding: undefined;
  Login: undefined;
  Register: undefined;
  BoardgamesList: undefined;
  Boardgame: {
    boardgameId: string;
    boardgame: IBoardgame;
    boardgameGenres: any[];
  };
  Utilities: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type PlaceProps = NativeStackScreenProps<RootStackParamList, "Place">;
export type BoardgameProps = NativeStackScreenProps<
  RootStackParamList,
  "Boardgame"
>;
export type MatchRoomProps = NativeStackScreenProps<
  RootStackParamList,
  "MatchRoom"
>;
