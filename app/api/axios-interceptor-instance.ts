import axios from "axios";
import { cookies } from "next/headers";

export const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:8002",
});

axiosInterceptorInstance.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("session")?.value;
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
