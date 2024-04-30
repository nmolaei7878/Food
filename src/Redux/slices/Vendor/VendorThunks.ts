import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "Constants/endpoints";
import api from "Utils/Axios";
import { toast } from "react-toastify";

export const getVendor = createAsyncThunk(
  "vendor/getVendor",
  async (page: number) => {
    try {
      const data = {
        lat: "35.753",
        long: "51.328",
      };
      const response = await api.get(
        `${endpoints.vendors}?page=${page}&page_size=10&lat=${data.lat}&long=${data.long}`
      );
      return await response?.data?.data?.finalResult;
    } catch (error) {
      
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  }
);
