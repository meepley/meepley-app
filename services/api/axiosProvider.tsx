import { createContext, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

export const AxiosContext = createContext<Partial<AxiosInstance>>({});

export default function AxiosProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const _axios = useMemo(() => {
    const _axios = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    _axios.interceptors.request.use((config) => {
      // Read token for anywhere, in this case directly from localStorage
      const token = localStorage.getItem("token");
      if (config?.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return _axios;
  }, []);

  return (
    <AxiosContext.Provider value={_axios}>{children}</AxiosContext.Provider>
  );
}
