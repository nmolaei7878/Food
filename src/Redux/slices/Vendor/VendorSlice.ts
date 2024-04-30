import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vendor } from "Types/Vendors";
import { getVendor } from "./VendorThunks";

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
          state.vendors = action.payload?.slice(1);
        } else {
          state.vendors = state.vendors?.concat(action.payload);
        }
        state.currentPage++;
      })
      .addCase(getVendor.rejected, (state,action) => {
        state.loading = false;
      });
  },
});

export default VendorSlice.reducer;
