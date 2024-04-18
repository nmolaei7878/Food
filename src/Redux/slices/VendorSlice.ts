import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vendor } from "Types/Vendors";
import axios from "axios";

type InitialState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: undefined | string;
  hasMore: boolean;
  vendors: Array<Vendor>;
};

const initialState: InitialState = {
  status: "idle",
  error: undefined,
  hasMore: true,
  vendors: [],
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(vendorNextPage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(vendorNextPage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vendors = state.vendors.concat(action.payload.finalResult);
        state.hasMore = action.payload.length > action.payload.count;
      })
      .addCase(vendorNextPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default VendorSlice.reducer;
export interface FetchDataParams {
  page: number;
  page_size: number;
  lat?: string;
  long?: string;
}
export const vendorNextPage = createAsyncThunk(
  "vendor/vendorNextPage",
  async ({
    page,
    page_size,
    lat = "35.753",
    long = "51.328",
  }: FetchDataParams) => {
    const response = await fetch(
      `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${page_size}&lat=${lat}&long=${long}`
    );
    const jsonData = await response.json();

    return jsonData.data;
  }
);
