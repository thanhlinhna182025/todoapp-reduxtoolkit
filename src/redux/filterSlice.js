import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priories: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioriesFilterChange: (state, action) => {
      state.priories = action.payload;
    },
  },
});
export const { searchFilterChange, statusFilterChange, prioriesFilterChange } =
  filterSlice.actions;

export default filterSlice.reducer;
