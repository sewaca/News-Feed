import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postAPI } from "~/entities/Post/";

const rootReducer = combineReducers({ [postAPI.reducerPath]: postAPI.reducer });

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });
};
