import { useQuery } from "react-query";
import { BGG_API } from "@utils/constants/api";
import axios from "axios";
import convert from "xml-js";

const getBoardGame = () => useQuery("characters", () => fetch(BGG_API));

const getBoardGamesList = async (page = 1) => {
  const getBgs = await axios.get(
    `https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=PpkI0szW33`
  );
  return getBgs.data;
};

export { getBoardGame, getBoardGamesList };
