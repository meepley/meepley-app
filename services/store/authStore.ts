import { proxy } from "valtio";
import { IUser } from "@ts/interfaces/IUser";

const authStore = proxy<{
  isAuth: boolean;
  user: IUser | undefined;
  setAuth: () => void;
}>({
  isAuth: false,
  user: undefined,
  setAuth: () => {},
});

export default authStore;
