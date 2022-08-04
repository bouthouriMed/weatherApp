import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  isLoading: false
}

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    getCities(state) {
      state.isLoading = true
    },
    setCities(state, action) {
     state.cities = action.payload
     state.isLoading = false
    },
    addCity(state) {
    },
    addCitySuccess(state, action){
      state.cities = [...state.cities, action.payload]
    },
  }
});

export const { getCities, setCities, addCity, addCitySuccess } = citySlice.actions;

export default citySlice.reducer;
