import { configureStore } from "@reduxjs/toolkit";
import airReducer from "../features/airSlice";

export const store = configureStore({
  reducer: {
    air: airReducer,
  },
});