import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country/countrySlice";
import filterSlice from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    country: countrySlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
