import { proxy } from "valtio";
import { IUser } from "@ts/interfaces/IUser";

const authStore = proxy<{
  isAuth: boolean;
  user: IUser | undefined;
  setAuth: (val: boolean) => void;
}>({
  isAuth: false,
  user: undefined,
  setAuth: (val) => {
    authStore.isAuth = val;
  },
});

export default authStore;
