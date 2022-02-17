// import axios from "axios";
// import { MEEPLEY_API } from "@utils/constants/api";

import { IMatchRoom } from "@ts/interfaces/IMatchRoom";
import { IUser } from "@ts/interfaces/IUser";

/* This is fake data stuff */
let users = [
  {
    id: 1,
    slug: "@martasilva95",
    username: "Marta Silva",
    email: "marta@gmail.com",
    matchs_played: 65,
    followers: 242,
    achievements: [
      {
        title: "Descobridor de Aveiro",
        description: "Jogou em 5 espaços diferentes",
        icon: "",
      },
      {
        title: "Mestre em Xadrez",
        description: "Ganhou mais de 50 partidas",
        icon: "",
      },
    ],
    title: "Mestre em Xadrez",
    avatar: "persona4.png",
    average_rating: 5,
    favorite_games: ["Pandemic", "Azul", "Xadrez"],
  },
  {
    id: 2,
    slug: "jorgeribass",
    username: "Jorge Ribas",
    email: "jorge@gmail.com",
    matchs_played: 57,
    followers: 113,
    achievements: [
      {
        title: "Amante de Aveiro",
        description: "Jogou em 15 espaços diferentes",
        icon: "",
      },
      {
        title: "Mestre em Splendor",
        description: "Ganhou mais de 50 partidas a jogar Splendor",
        icon: "",
      },
    ],
    title: "Mestre em Splendor",
    avatar: "persona1.png",
    average_rating: 5,
    favorite_games: [
      "Splendor",
      "Patchwork",
      "Yokohama",
      "PARKS",
      "Cascadia",
      "Istanbul",
    ],
  },
  {
    id: 3,
    slug: "beatriz_",
    username: "Beatriz_",
    email: "bia@gmail.com",
    matchs_played: 31,
    followers: 42,
    achievements: [
      {
        title: "Exemplo da Comunidade",
        description: "Recebeu 25 vezes 5* na avaliação",
        icon: "",
      },
      {
        title: "Amante de Aveiro",
        description: "Jogou em 15 espaços diferentes",
        icon: "",
      },
    ],
    title: "Exemplo da Comunidade",
    avatar: "persona2.png",
    average_rating: 5,
    favorite_games: ["Liboa", "Codenames", "The Isle of Cats"],
  },
  {
    id: 4,
    slug: "matiasousa",
    username: "Matias Sousa",
    email: "matias@gmail.com",
    matchs_played: 2,
    followers: 3,
    achievements: [
      {
        title: "Novato",
        description: "Jogou pela primeira vez!",
        icon: "",
      },
    ],
    title: "Novato",
    avatar: "persona3.png",
    average_rating: 4,
    favorite_games: ["Wingspan", "Root", "Powergrid"],
  },
];

let matchRooms = [
  {
    id: 1,
    games: [{ name: "Gloomhaven" }],
    name: "Partida de Gloomhaven",
    users: [
      {
        id: 2,
        slug: "jorgeribass",
        username: "Jorge Ribas",
        avatar: "persona1.png",
      },
      {
        id: 3,
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: "persona2.png",
      },
      {
        id: 4,
        slug: "matiasousa",
        username: "Matias Sousa",
        avatar: "persona3.png",
      },
    ],
    required_level: "beginner",
    place: {
      name: "Avenida Café-Concerto",
      minimum_consumption: 1.5,
    },
    estimated_duration: "30-45 min",
    privacy: "public",
    date: "2022/02/20",
    hour: "14:30",
    code: "ba408eb1-7e61-42f5-a54b-6649c11bc58e",
    isOn: false,
  },
  {
    id: 2,
    games: [{ name: "Azul" }, { name: "Patchworks" }],
    name: "Jogatina na UA",
    users: [
      {
        id: 2,
        slug: "jorgeribass",
        username: "Jorge Ribas",
        avatar: "persona1.png",
      },
    ],
    required_level: "beginner",
    place: {
      name: "Universidade de Aveiro",
      minimum_consumption: null,
    },
    estimated_duration: "2h",
    privacy: "public",
    date: "2022/03/02",
    hour: "16:15",
    code: "9e221115-8f84-4b1a-995a-6800396f0629",
    isOn: false,
  },
  {
    id: 3,
    games: [{ name: "Pandemic" }],
    name: "Combater a Pandemia",
    users: [
      {
        id: 3,
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: "persona2.png",
      },
    ],
    required_level: "beginner",
    place: {
      name: "FriendZone Lounge",
      minimum_consumption: 1.5,
    },
    estimated_duration: "20min",
    privacy: "public",
    date: "2022/02/22",
    hour: "20:30",
    code: "e7680748-3e8d-4944-a706-6d0e28954400",
    isOn: false,
  },
];

let places = [
  {
    id: 1,
    name: "FriendZone Lounge",
    type: ["Café", "Estabelecimento Comercial", "Cultura Geek"],
    latlng: {
      latitude: 40.62663162639325,
      longitude: -8.650004736177138,
    },
    daysOpen: "Quartas, Sextas e Sábados",
    hoursOpen: "21:30-01:00",
    matches: [
      {
        id: 3,
        games: [{ name: "Pandemic" }],
        name: "Combater a Pandemia",
        required_level: "beginner",
        estimated_duration: "20min",
        privacy: "public",
        date: "2022/02/22",
        hour: "20:30",
      },
    ],
    minimum_consumption: 1.5,
    img: "friendzone.jpeg",
    averageRating: 4.6,
    city: "Aveiro",
  },
  {
    id: 2,
    name: "Avenida Café-Concerto",
    type: ["Café", "Estabelecimento Comercial"],
    latlng: {
      latitude: 40.64239282703135,
      longitude: -8.649612359409039,
    },
    daysOpen: "Todos os dias excepto Terças-feiras",
    hoursOpen: "17:00-02:00",
    matches: [
      {
        id: 1,
        games: [{ name: "Gloomhaven" }],
        name: "Partida de Gloomhaven",
        required_level: "beginner",
        estimated_duration: "30-45 min",
        privacy: "public",
        date: "2022/02/20",
        hour: "14:30",
      },
    ],
    minimum_consumption: 1.5,
    img: "avenidacafeconcerto.png",
    averageRating: 4.7,
    city: "Aveiro",
  },
  {
    id: 3,
    name: "Universidade de Aveiro",
    type: ["Instituição", "Local Público"],
    latlng: {
      latitude: 40.630537815536385,
      longitude: -8.65750746319497,
    },
    daysOpen: "Todos os dias",
    hoursOpen: "09:00-18:00",
    matches: [
      {
        id: 2,
        games: [{ name: "Azul" }, { name: "Patchworks" }],
        name: "Jogatina na UA",
        required_level: "beginner",
        estimated_duration: "2h",
        privacy: "public",
        date: "2022/03/02",
        hour: "16:15",
      },
    ],
    minimum_consumption: null,
    img: "ua.jpeg",
    averageRating: 5,
    city: "Aveiro",
  },
  {
    id: 4,
    name: "Convívio",
    type: ["Café", "Estabelecimento Comercial"],
    latlng: {
      latitude: 40.63405795547598,
      longitude: -8.648266475764512,
    },
    daysOpen: "Segunda a Sábado",
    hoursOpen: "09:00-02:00",
    matches: [],
    minimum_consumption: 1.5,
    img: "convivio.jpeg",
    averageRating: 4.5,
    city: "Aveiro",
  },
  {
    id: 5,
    name: "Forum Aveiro",
    type: ["Espaço Público", "Superfície Comercial"],
    latlng: {
      latitude: 40.640994722057314,
      longitude: -8.651877533113431,
    },
    daysOpen: "",
    hoursOpen: "",
    matches: [],
    minimum_consumption: null,
    img: "forum.jpeg",
    averageRating: 4.2,
    city: "Aveiro",
  },
];

const meepleyAPI = {
  getUserProfile: (userId: number): IUser => {
    new Promise<IUser>((resolve, reject) => {
      const user = users[userId];

      if (!users) {
        return setTimeout(() => reject(new Error("User not found")), 250);
      }

      return setTimeout(() => resolve(user), 250);
    });
  },
  updateUserProfile: () => {},
  getMatchRooms: (): IMatchRoom[] => {
    new Promise<IMatchRoom[]>((resolve, reject) => {
      if (!matchRooms) {
        return setTimeout(() => reject(new Error("Matchrooms not found")), 250);
      }

      setTimeout(() => resolve(matchRooms), 350);
    });
  },
  getMatchRoom: (matchRoomId: number): IMatchRoom => {
    new Promise<IMatchRoom>((resolve, reject) => {
      const matchRoom = matchRooms[matchRoomId];

      if (!matchRooms) {
        return setTimeout(() => reject(new Error("Matchrooms not found")), 250);
      }

      return setTimeout(() => resolve(matchRoom), 250);
    });
  },
  updateMatchroom: (matchRoomId: number, action: string, payload?: any) => {
    new Promise((resolve, reject) => {
      const matchroom = matchRooms[matchRoomId];

      if (!matchroom) {
        return setTimeout(() => reject(new Error("Matchroom not found")), 250);
      }

      switch (action) {
        case "enter":
          matchroom.users.push(payload);
          break;
        case "leave":
          matchroom.users = matchroom.users.filter(
            (user) => user.id !== payload
          );
          break;
        case "start":
          matchroom.isOn = true;
        case "finish":
          matchroom.isOn = false;
          break;
        default:
          break;
      }

      return setTimeout(() => resolve(true), 250);
    });
  },
  deleteMatchroom: (matchRoomId: number) => {
    new Promise((resolve, reject) => {
      const matchroom = matchRooms[matchRoomId];

      if (!matchroom) {
        return setTimeout(() => reject(new Error("Matchroom not found")), 250);
      }

      matchRooms = matchRooms.filter(({ id }) => id !== matchRoomId);

      return setTimeout(() => resolve(true), 250);
    });
  },
};

export default meepleyAPI;
