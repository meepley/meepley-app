import { IBoardgame } from "@ts/interfaces/IBoardgame";

export interface IUser {
  slug: string;
  name: string;
  title: string;
  followers: number;
  rating: number;
  following: IUser[];
  matches: number;
  achievements: [];
  favoriteGames: IBoardgame[];
}
