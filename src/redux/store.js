import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsJsonApi } from "./service/reduxApi";
export const store = configureStore({
  reducer: {
    [postsJsonApi.reducerPath]: postsJsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsJsonApi.middleware),
});
setupListeners(store.dispatch);
