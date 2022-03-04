import { IBoardgame } from "@ts/interfaces/IBoardgame";
import { ImageSourcePropType } from "react-native";

export interface IUser {
  id: number;
  slug: string;
  username: string;
  email: string;
  matchs_played: number;
  followers: number;
  achievements: {
    title: string;
    description: string;
    icon: string;
  }[];
  title: string;
  avatar: ImageSourcePropType;
  average_rating: number;
  favorite_games: string[];
  following: { slug: string; username: string; avatar: ImageSourcePropType }[];
  did_finish_calibration: boolean;
}
