import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper, fetchVisiableCampers } from "./operations";

export const campersSlice = createSlice({
    name: "items",
    initialState: {
            items: [],
            loading: false,
            error: null,
            pagination: {
              page: "1",
              limit:"5",
              total: "23"
          }
    },

   extraReducers: builder => {
        builder
        .addCase(fetchCampers.pending, state => {
            state.error = false;
            state.loading = true;
          })
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
          })
        .addCase(fetchCampers.rejected, state => {
            state.loading = false;
            state.error = true;
          })
          .addCase(fetchCamper.pending, state => {
            state.error = false;
            state.loading = true;
          })
        .addCase(fetchCamper.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
          })
        .addCase(fetchCamper.rejected, state => {
            state.loading = false;
            state.error = true;
          })
           .addCase(fetchVisiableCampers.pending, state => {
            state.error = false;
            state.loading = true;
          })
          .addCase(fetchVisiableCampers.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
          })
          .addCase(fetchVisiableCampers.rejected, state => {
            state.loading = false;
            state.error = true;
          })
   },
}
);
export default campersSlice.reducer;

export const campersReducer = campersSlice.reducer;