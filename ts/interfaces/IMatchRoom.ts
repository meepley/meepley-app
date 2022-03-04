export interface IMatchRoom {
  id: number;
  games: {
    name: string;
    description: string;
  }[];
  name: string;
  img: string;
  users: {
    id: number;
    slug: string;
    username: string;
    avatar: string;
    role: string;
  }[];
  required_level: string;
  place: {
    name: string;
    minimum_consumption: number | null;
  };
  estimated_duration: string;
  privacy: string;
  date: string;
  hour: string;
  code: string;
  isOn: boolean;
  max_players: number;
}
