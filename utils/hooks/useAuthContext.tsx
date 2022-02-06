import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface IAuthContext {
  isAuth: boolean;
  setAuth?: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isAuth: false,
};

export const AuthContext = createContext<IAuthContext>(defaultState);

const AuthContextProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth: auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
