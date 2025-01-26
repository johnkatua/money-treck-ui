"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:8002/api",
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

// import axios from "axios";
// import { cookies } from "next/headers";
// export const getAxiosInstance = () => {
//   const instance = axios.create({
//     baseURL: "http://localhost:8002/api",
//   });

//   // Server-side token handling
//   if (typeof window === "undefined") {
//     instance.interceptors.request.use((config) => {
//       const cookieStore = cookies();
//       const accessToken = cookieStore.get("session")?.value;

//       if (accessToken) {
//         config.headers.token = accessToken;
//         // config.headers = {
//         //   ...config.headers,
//         //   token: accessToken,
//         // };
//       }
//       return config;
//     }, Promise.reject);
//   }

//   // Client-side token handling (if necessary)
//   return instance;
// };

// // Usage
// export const axiosInterceptorInstance = getAxiosInstance();
