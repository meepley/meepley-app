// import axios from "axios";
// import { MEEPLEY_API } from "@utils/constants/api";

import { IMatchRoom } from "@ts/interfaces/IMatchRoom";
import { IUser } from "@ts/interfaces/IUser";

/* This is fake data stuff */
export let users = [
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
    did_finish_calibration: false,
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
    did_finish_calibration: false,
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
    did_finish_calibration: false,
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
    did_finish_calibration: false,
  },
];

export let matchRooms = [
  {
    id: 1,
    games: [{ name: "Gloomhaven" }],
    name: "Partida de Gloomhaven",
    img: "https://849310.smushcdn.com/1803394/wp-content/uploads/2017/12/gloomhaven-overview-header.jpg?lossy=1&strip=1&webp=1",
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
    img: "https://spikeybits.com/wp-content/uploads/2018/02/azul-cover.jpg",
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
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pandemic-switch/hero",
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

export let places = [
  {
    id: 1,
    address: "R. de Anadia 69, 3810-208 Aveiro",
    name: "FriendZone Lounge",
    type: ["Café", "Estabelecimento Comercial", "Cultura Geek"],
    latlng: {
      latitude: 40.62663162639325,
      longitude: -8.650004736177138,
    },
    daysOpen: "Quartas, Sextas e Sábados",
    hoursOpen: "21:30-01:00",
    matches: [matchRooms[2]],
    minimum_consumption: 1.5,
    img: "https://scontent.fopo4-1.fna.fbcdn.net/v/t39.30808-6/273992287_1775030719368556_767887764963893554_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=oxtomaZ5QzAAX-FJG7m&_nc_ht=scontent.fopo4-1.fna&oh=00_AT_2diGFFZA1HPwZihaY-kaAPEouLhWdoe7qCVVvQ94O4Q&oe=62228DB4",
    averageRating: 4.6,
    city: "Aveiro",
  },
  {
    id: 2,
    address: "Praça do Mercado nº1, 3800-224 Aveiro",
    name: "Avenida Café-Concerto",
    type: ["Café", "Estabelecimento Comercial"],
    latlng: {
      latitude: 40.64239282703135,
      longitude: -8.649612359409039,
    },
    daysOpen: "Todos os dias excepto Terças-feiras",
    hoursOpen: "17:00-02:00",
    matches: [matchRooms[0]],
    minimum_consumption: 1.5,
    img: "https://imagens.publico.pt/imagens.aspx/1387318?tp=UH&db=IMAGENS&type=JPG",
    averageRating: 4.7,
    city: "Aveiro",
  },
  {
    id: 3,
    address: "Universidade de Aveiro, 3810-193 Aveiro",
    name: "Universidade de Aveiro",
    type: ["Instituição", "Local Público"],
    latlng: {
      latitude: 40.630537815536385,
      longitude: -8.65750746319497,
    },
    daysOpen: "Todos os dias",
    hoursOpen: "09:00-18:00",
    matches: [matchRooms[1]],
    minimum_consumption: null,
    img: "https://api-assets.ua.pt/files/imgs/000/000/048/original.jpg",
    averageRating: 5,
    city: "Aveiro",
  },
  {
    id: 4,
    address: "R. de Aires Barbosa 11, 3810-049 Aveiro",
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
    img: "https://www.evasoes.pt/files/2019/01/33370087_BINARY_GL23122018_MARIAJOAOGALA17_resultado-960x640_c.jpg",
    averageRating: 4.5,
    city: "Aveiro",
  },
  {
    id: 5,
    address: "R. do Batalhão de Caçadores 10, 3810-064 Aveiro",
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
    img: "https://forumaveiro.com/wp-content/uploads/2019/04/forum_default_banner.jpg",
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
  getPlaces: (): any[] => {
    new Promise<any[]>((resolve, reject) => {
      if (!places) {
        return setTimeout(() => reject(new Error("Matchrooms not found")), 250);
      }

      setTimeout(() => resolve(places), 350);
    });
  },
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
