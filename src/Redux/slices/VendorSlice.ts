import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vendor } from "Types/Vendors";

type InitialState = {
  currentPage: number;
  loading: boolean;
  vendors: Array<Vendor>;
};

const initialState: InitialState = {
  loading: false,
  vendors: [],
  currentPage: 0,
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVendor.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentPage === 0) {
          state.vendors = action.payload.slice(1);
        } else {
          state.vendors = state.vendors.concat(action.payload);
        }
        state.currentPage++;
      })
      .addCase(getVendor.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default VendorSlice.reducer;

export const getVendor = createAsyncThunk(
  "vendor/getVendor",
  async (page: number) => {
    try {
      const data = {
        lat: "35.753",
        long: "51.328",
      };
      const response = await fetch(
        `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=10&lat=${data.lat}&long=${data.long}`
      );
      const newData = await response.json();

      return newData.data.finalResult;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
);
