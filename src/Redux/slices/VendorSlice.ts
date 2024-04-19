import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vendor } from "Types/Vendors";
import axios from "axios";

type InitialState = {
  loading: boolean;
  vendors: Array<Vendor>;
};

const initialState: InitialState = {
  loading: false,
  vendors: [],
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(vendorNextPage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(vendorNextPage.fulfilled, (state, action) => {
      state.loading = false;
      state.vendors = action.payload;
    });
    builder.addCase(vendorNextPage.rejected, (state, action) => {
      state.loading = false;
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
