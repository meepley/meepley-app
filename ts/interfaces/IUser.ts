import { IBoardgame } from "@ts/interfaces/IBoardgame";

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
  avatar: string;
  average_rating: number;
  favorite_games: string[];
}
