import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CountryState {
  countryData: ICountry[];
}

const initialState: CountryState = {
  countryData: [],
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountryData: (state, action: PayloadAction<ICountry[]>) => {
      state.countryData = action.payload;
    },
  },
});

export const { setCountryData } = countrySlice.actions;
export default countrySlice.reducer;
