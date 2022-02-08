import { proxy } from "valtio";

const meepleyDataStore = proxy<{
  profile: [];
  error: string | null | undefined;
  isLoading: false;
  isInMatchRoom: boolean;
  fetchMatchRooms: () => void;
  fetchProfile: () => void;
}>({
  profile: [],
  error: null,
  isLoading: false,
  isInMatchRoom: false,
  fetchMatchRooms: () => {},
  fetchProfile: () => {},
});

export default meepleyDataStore;
