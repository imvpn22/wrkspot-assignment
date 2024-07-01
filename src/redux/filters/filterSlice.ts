import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  countryName: string;
  population: IDropdownOption | null;
}

const initialState: FilterState = {
  countryName: "",
  population: null,
};

export const filterSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountryName: (state, action: PayloadAction<string>) => {
      state.countryName = action.payload;
    },
    setPopulation: (state, action: PayloadAction<IDropdownOption | null>) => {
      state.population = action.payload;
    },
  },
});

export const { setCountryName, setPopulation } = filterSlice.actions;
export default filterSlice.reducer;
