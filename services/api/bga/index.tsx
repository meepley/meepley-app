import axios from "axios";

import { BGA_API } from "@utils/constants/api";
import { IBoardgame } from "@ts/interfaces/IBoardgame";

const bgaAPI = {
  getBoardGame: async (gameId: string) => {
    return {
      videos: (await bgaAPI.getBoardGameVideos(gameId, 0)).videos,
      images: (await bgaAPI.getBoardGameImages(gameId, 0)).images,
    };
  },
  getBoardGameVideos: async (gameId: string, page = 1) => {
    const skip = 10 * page;
    const { data } = await axios.get<{
      videos: { id: string; name: string; url: string }[];
    }>(
      `${BGA_API}game/videos?game_id=${gameId}skip=${skip}&order_by=created_at&limit=10&client_id=PpkI0szW33`
    );

    return {
      videos: data.videos,
    };
  },
  getBoardGameImages: async (gameId: string, page = 1) => {
    const skip = 10 * page;
    const { data } = await axios.get<{
      categories: { id: string; name: string; url: string }[];
    }>(
      `${BGA_API}game/images?game_id=${gameId}&skip=${skip}&order_by=created_at&limit=10&client_id=PpkI0szW33`
    );

    return {
      images: data.categories,
    };
  },
  getBoardGameGenres: async () => {
    const { data } = await axios.get<{
      categories: { id: string; name: string; url: string }[];
    }>(`${BGA_API}game/categories?client_id=PpkI0szW33`);

    return {
      genres: data.categories,
    };
  },
  getBoardGamesList: async (page = 1) => {
    const skip = 30 * page;
    const { data } = await axios.get<{
      games: IBoardgame[];
      count: number;
    }>(
      `${BGA_API}search?skip=${skip}order_by=rank&ascending=false&client_id=PpkI0szW33`
    );

    const hasMore = true;

    return {
      boardgames: data.games,
      page: page,
      count: data.count,
      hasMore: hasMore,
    };
  },
};

export default bgaAPI;
