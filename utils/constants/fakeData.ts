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
        icon: "staro",
      },
      {
        title: "Mestre em Xadrez",
        description: "Ganhou mais de 50 partidas",
        icon: "staro",
      },
    ],
    title: "Mestre em Xadrez",
    avatar: require("@assets/images/personas/persona4.png"),
    average_rating: 5,
    favorite_games: ["Pandemic", "Azul", "Xadrez"],
    following: [
      {
        slug: "jorgeribass",
        username: "Jorge Ribas",
        avatar: require("@assets/images/personas/persona1.png"),
      },
      {
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: require("@assets/images/personas/persona2.png"),
      },
      {
        slug: "matiasousa",
        username: "Matias Sousa",
        avatar: require("@assets/images/personas/persona3.png"),
      },
    ],
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
        icon: "staro",
      },
      {
        title: "Mestre em Splendor",
        description: "Ganhou mais de 50 partidas a jogar Splendor",
        icon: "staro",
      },
    ],
    title: "Mestre em Splendor",
    avatar: require("@assets/images/personas/persona1.png"),
    average_rating: 5,
    favorite_games: [
      "Splendor",
      "Patchwork",
      "Yokohama",
      "PARKS",
      "Cascadia",
      "Istanbul",
    ],
    following: [
      {
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: require("@assets/images/personas/persona2.png"),
      },
      {
        slug: "matiasousa",
        username: "Matias Sousa",
        avatar: require("@assets/images/personas/persona3.png"),
      },
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
        icon: "staro",
      },
      {
        title: "Amante de Aveiro",
        description: "Jogou em 15 espaços diferentes",
        icon: "staro",
      },
    ],
    title: "Exemplo da Comunidade",
    avatar: require("@assets/images/personas/persona2.png"),
    average_rating: 5,
    favorite_games: ["Liboa", "Codenames", "The Isle of Cats"],
    following: [
      {
        slug: "jorgeribass",
        username: "Jorge Ribas",
        avatar: require("@assets/images/personas/persona1.png"),
      },
      {
        slug: "matiasousa",
        username: "Matias Sousa",
        avatar: require("@assets/images/personas/persona3.png"),
      },
    ],
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
        icon: "staro",
      },
    ],
    title: "Novato",
    avatar: require("@assets/images/personas/persona3.png"),
    average_rating: 4,
    favorite_games: ["Wingspan", "Root", "Powergrid"],
    following: [
      {
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: require("@assets/images/personas/persona2.png"),
      },
    ],
    did_finish_calibration: false,
  },
];

export let matchRooms = [
  {
    id: 1,
    games: [
      {
        name: "Gloomhaven",
        description:
          "Being a mercenary on the edge of civilization is anything but easy. For those stupid or brave enough to leave the relative safety of Gloomhaven's walls, adventure, wealth, and fame await in wild and shadowy forests, snowy mountain caves, and long-forgotten crypts. Just don't expect anyone to pay for your services up-front, because no one expects you to come back alive. Gloomhaven is a cooperative game of tactical combat in a unique, evolving fantasy world. Each player will assume the role of a hardened mercenary with their own personal motives. Together, players will fight through a campaign of scenarios that reacts and changes based on the players' actions, creating a unique game state full of discovered treasure, retired adventurers, and permanent choices. Each scenario offers players deep tactical decisions, where ability cards have multiple uses, and using the right ability at the right time can mean the difference between success and failure. Gloomhaven offers stream-lined tactical combat without dice against fully automated enemies, each with their own unique behavior patterns. In this box, players will find a fully realized fantasy campaign experience of unparalleled scope and depth.",
      },
    ],
    name: "Partida de Gloomhaven",
    img: "https://849310.smushcdn.com/1803394/wp-content/uploads/2017/12/gloomhaven-overview-header.jpg?lossy=1&strip=1&webp=1",
    users: [
      {
        id: 2,
        slug: "jorgeribass",
        username: "Jorge Ribas",
        avatar: "persona1.png",
        role: "admin",
      },
      {
        id: 3,
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: "persona2.png",
        role: "player",
      },
      {
        id: 4,
        slug: "matiasousa",
        username: "Matias Sousa",
        avatar: "persona3.png",
        role: "player",
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
    max_players: 4,
  },
  {
    id: 2,
    games: [
      {
        name: "Azul",
        description:
          "Azul is a tile-placement game in which players compete for the highest score by claiming tiles and arranging them on their board to score points. Extra points are on offer for collecting sets of the same colour of tile, or for creating particular patterns, while there are penalties for taking tiles that you're unable to use. But every tile that you claim affects what your rivals can take next. You'll have to make choices that help you without helping them too much!\n\n2-4 players\nAges 8+\n30-45 minute play time\n\nContents:\n100 Resin Tiles\n4 Player boards\n9 Factory displays\n4 Scoring markers\n1 Starting player marker\n1 Linen bag",
      },
      {
        name: "Patchworks",
        description:
          "Patchwork is a form of needlework that involves sewing together pieces of fabric into a larger design. In the past, it was a way to make use of leftover pieces of cloth to create clothing and quilts. Today, patchwork is a form of art, in which the designers use precious fabrics to create beautiful textiles. The use of uneven pieces of fabric in particular can result in real masterpieces and is therefore being practiced by a large number of textile artists. To create a beautiful quilt, however, requires effort and time, but the available patches just do not want to fit together. So choose your patches carefully and keep a healthy supply of buttons to not only finish your quilt, but to make it better and more beautiful than your opponent's.",
      },
    ],
    name: "Jogatina na UA",
    img: "https://spikeybits.com/wp-content/uploads/2018/02/azul-cover.jpg",
    users: [
      {
        id: 2,
        slug: "jorgeribass",
        username: "Jorge Ribas",
        avatar: "persona1.png",
        role: "admin",
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
    max_players: 8,
  },
  {
    id: 3,
    games: [
      {
        name: "Pandemic",
        description:
          "From designer Matt Leacock, Pandemic is a cooperative game of teamwork where an elite team must work together to keep four deadly diseases at bay. Assemble your team to discover the cure, stop the spreading diseases, and avert a global disaster.\n\nCelebrate a decade of curing diseases with the game that started it all. This beautifully-rendered anniversary edition of Pandemic includes a custom metal box, all-new art with a vintage aesthetic, large ID cards, plastic figures, and plenty of wooden pieces. Can you save humanity?\n\nLimited release anniversary edition comes in a custom metal case, reminiscent of old first aid kits. Detailed plastic figures and large ID cards upgrade the character roles for an immersive experience. A larger world map and all new art with a vintage aesthetic make this classic game shine. Wooden components are a tribute to the game's 1st edition.\n\n2-4 players\nAges 8+\n45 minute play time",
      },
    ],
    name: "Combater a Pandemia",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pandemic-switch/hero",
    users: [
      {
        id: 3,
        slug: "beatriz_",
        username: "Beatriz_",
        avatar: "persona2.png",
        role: "admin",
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
    max_players: 4,
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
