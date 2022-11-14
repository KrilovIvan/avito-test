import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import newsReducer from "./newsReducer";

const reducers = combineReducers({
  newsReducer: newsReducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
