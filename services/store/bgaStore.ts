import { proxy } from "valtio";

import bgaAPI from "@services/api/bga";
import { IBoardgame } from "@ts/interfaces/IBoardgame";
import { _add } from "@utils/helpers/add";

const bgaStore = proxy<{
  boardgames: {
    items: IBoardgame[];
    page: number;
    count: number;
    hasMore: boolean;
    genres: { id: string; name: string; url: string }[];
  };
  boardgame: {
    videos: [];
    images: [];
  };
  error: string | null | undefined;
  isLoading: boolean;
  fetchBoardgames: (page: number) => Promise<void>;
  fetchBoardgame: (bgId: string) => Promise<void>;
}>({
  boardgames: { items: [], page: 0, count: 0, hasMore: true, genres: [] },
  boardgame: { videos: [], images: [] },
  error: null,
  isLoading: true,
  fetchBoardgames: async (page: number) => {
    bgaStore.boardgames.page = page;
    bgaStore.isLoading = true;
    try {
      const boardgames = await bgaAPI.getBoardGamesList(page);
      const getGenres = await bgaAPI.getBoardGameGenres();
      bgaStore.boardgames = {
        items: [...bgaStore.boardgames.items, ...boardgames.boardgames],
        page: boardgames.page,
        count: boardgames.count,
        hasMore: boardgames.hasMore,
        genres: getGenres.genres,
      };
    } catch (err) {
      if (err instanceof Error) bgaStore.error = err?.message;
    }

    bgaStore.isLoading = false;
  },
  fetchBoardgame: async (bgId: string) => {
    bgaStore.isLoading = true;
    try {
      const boardgames = await bgaAPI.getBoardGame(bgId);
      bgaStore.boardgame = { videos: [], images: [] };
    } catch (err) {
      if (err instanceof Error) bgaStore.error = err?.message;
    }

    bgaStore.isLoading = false;
  },
});

export default bgaStore;
