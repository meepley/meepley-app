import authStore from "@services/store/authStore";
import axios from "axios";

const _axios = () => {
  const _axios = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  _axios.interceptors.request.use((config) => {
    // Read token for anywhere, in this case directly from localStorage
    const token = authStore.token;
    if (config?.headers && token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }

    return config;
  });

  return _axios;
};

export default _axios;
