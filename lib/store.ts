import { configureStore } from "@reduxjs/toolkit";

// Used to create a new store for each request. Read more here (https://redux-toolkit.js.org/usage/nextjs)
export const makeStore = () => {
  return configureStore({
    reducer: {},
  });
};
