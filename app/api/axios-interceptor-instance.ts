"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "../actions/auth";

export const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:8002/api",
});

axiosInterceptorInstance.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("session")?.value;
    if (accessToken) {
      if (config.headers)
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//   (response) => {
//     return response;
//   },
//   (error) => {
//     ("use server");
//     if (error.response.status === 401) {
//       logout();
//       // redirect("/login");
//       // window.history.replaceState(null, "", "/login");
//     }
//     return Promise.reject(error);
//   }
// );
