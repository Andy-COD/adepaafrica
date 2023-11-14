import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./Dashboard slice/DashboardSlice";

export const store = configureStore({
  reducer: {
    counter: DashboardReducer,
  },
});
