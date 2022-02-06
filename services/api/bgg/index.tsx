import { useQuery } from "react-query";
import { BGG_API } from "@utils/constants/api";
import axios from "axios";
import { IBoardgame } from "@ts/interfaces/IBoardgame";

const getBoardGame = () => useQuery("characters", () => fetch(BGG_API));

const getBoardGameGenres = () => useQuery("characters", () => fetch(BGG_API));

const getBoardGamesList = async ({ pageParam = 1 }) => {
  const skip = 30 * pageParam;
  const getBgs = await axios.get<{
    games: IBoardgame[];
    count: number;
  }>(
    `https://api.boardgameatlas.com/api/search?skip=${skip}order_by=rank&ascending=false&client_id=PpkI0szW33`
  );
  return {
    boardgames: getBgs.data.games,
    page: pageParam,
    count: getBgs.data.count,
  };
};

export { getBoardGame, getBoardGamesList };
