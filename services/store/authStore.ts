import { proxy, subscribe } from "valtio";

import { IUser } from "@ts/interfaces/IUser";
import { users } from "@services/api/meepley";
import {
  getDataObject,
  removeValue,
  storeDataObject,
} from "@services/localStorage";

const authStore = proxy<{
  hydrated: boolean;
  isAuth: boolean;
  user: IUser | undefined;
  token: string | undefined;
  refreshToken: string | undefined;
  setAuth: (val: boolean, action: string) => void;
  hydrateState: () => void;
}>({
  hydrated: false,
  isAuth: false,
  user: undefined,
  token: undefined,
  refreshToken: undefined,
  setAuth: async (val, action) => {
    authStore.isAuth = val;

    if (action === "login") {
      authStore.user = users[0];
    } else {
      await removeValue("user");
      authStore.user = undefined;
    }
  },
  hydrateState: async () => {
    const storedState = await getDataObject("auth-state");
    if (storedState) {
      authStore.isAuth = storedState.isAuth;
      authStore.user = storedState.user;
    }

    authStore.hydrated = true;
  },
});

subscribe(authStore, async () => {
  await storeDataObject(authStore, "auth-state");
});

export default authStore;
