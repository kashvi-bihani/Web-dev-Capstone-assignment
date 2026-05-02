import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAirQuality } from "../services/api";

export const getAirData = createAsyncThunk(
  "air/getAirData",
  async (city) => {
    const data = await fetchAirQuality(city);
    return data;
  }
);

const airSlice = createSlice({
  name: "air",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAirData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAirData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAirData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      });
  },
});

export default airSlice.reducer;