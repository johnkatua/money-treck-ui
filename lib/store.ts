import { configureStore } from "@reduxjs/toolkit";

// Used to create a new store for each request. Read more here (https://redux-toolkit.js.org/usage/nextjs)
export const makeStore = () => {
  return configureStore({
    reducer: {},
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
