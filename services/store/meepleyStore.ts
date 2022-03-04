import { proxy } from "valtio";
import meepleyAPI from "@services/api/meepley";

const meepleyDataStore = proxy<{
  isLoading: boolean;
  error: string | null | undefined;
  isInMatchRoom: boolean;
  matchRooms: any[];
  places: any[];
  user: {};
  fetchPlaces: () => Promise<void>;
  fetchMatchRooms: () => Promise<void>;
  fetchAddMatchRoom: (matchRoom: number) => Promise<void>;
  fetchUser: (name: string) => Promise<void>;
}>({
  isLoading: false,
  error: null,
  isInMatchRoom: false,
  matchRooms: [],
  places: [],
  user: {},
  fetchPlaces: async () => {
    const places = await meepleyAPI.getPlaces();
    meepleyDataStore.places = places;
  },
  fetchMatchRooms: async () => {
    const matchRooms = await meepleyAPI.getMatchRooms();
    meepleyDataStore.matchRooms = matchRooms;
  },
  fetchUser: async (name) => {
    const userData = await meepleyAPI.getUserProfile(name);
    meepleyDataStore.user = userData;
  },
  fetchAddMatchRoom: async (id) => {},
});

export default meepleyDataStore;
