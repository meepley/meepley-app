import { proxy } from "valtio";
import meepleyAPI from "@services/api/meepley";

const meepleyDataStore = proxy<{
  isLoading: boolean;
  error: string | null | undefined;
  isInMatchRoom: boolean;
  matchRooms: any[];
  profile: {};
  fetchMatchRooms: () => Promise<void>;
  fetchAddMatchRoom: (matchRoom: number) => Promise<void>;
  fetchProfile: (id: number) => Promise<void>;
}>({
  isLoading: false,
  error: null,
  isInMatchRoom: false,
  matchRooms: [],
  profile: {},
  fetchMatchRooms: async () => {
    try {
      const matchRooms = await meepleyAPI.getMatchRooms();
      meepleyDataStore.matchRooms = matchRooms;
    } catch (err) {
      if (err instanceof Error) meepleyDataStore.error = err?.message;
    }
  },
  fetchAddMatchRoom: async (id) => {},
  fetchProfile: async (id: number) => {
    try {
      const getProfile = await meepleyAPI.getUserProfile(id);
      meepleyDataStore.profile = getProfile;
    } catch (err) {
      if (err instanceof Error) meepleyDataStore.error = err?.message;
    }
  },
});

export default meepleyDataStore;
