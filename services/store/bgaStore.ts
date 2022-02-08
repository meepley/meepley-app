import { proxy } from "valtio";
import { IBoardgame } from "@ts/interfaces/IBoardgame";
import { getBoardGamesList, getBoardGameVideos } from "@services/api/bga";

const bgaStore = proxy<{
  boardgames: {
    items: IBoardgame[];
    page: number;
    count: number;
  };
  boardgame: {
    videos: [];
  };
  error: string | null | undefined;
  isLoading: boolean;
  fetchBoardgames: (page: number) => Promise<void>;
  fetchBoardgameVideos: (bgId: string) => Promise<void>;
}>({
  boardgames: { items: [], page: 1, count: 0 },
  boardgame: { videos: [] },
  error: null,
  isLoading: false,
  fetchBoardgames: async (page: number) => {
    bgaStore.isLoading = true;
    try {
      const boardgames = await getBoardGamesList(page);
      bgaStore.boardgames = {
        items: [...bgaStore.boardgames.items, ...boardgames.boardgames],
        page: boardgames.page,
        count: boardgames.count,
      };
    } catch (err) {
      if (err instanceof Error) bgaStore.error = err?.message;
    }

    bgaStore.isLoading = false;
  },
  fetchBoardgameVideos: async (bgId: string) => {
    bgaStore.isLoading = true;
    try {
      const boardgames = await getBoardGameVideos();
      bgaStore.boardgame = { videos: [] };
    } catch (err) {
      if (err instanceof Error) bgaStore.error = err?.message;
    }

    bgaStore.isLoading = false;
  },
});

export default bgaStore;
