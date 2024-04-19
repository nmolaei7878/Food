import { configureStore, combineReducers } from "@reduxjs/toolkit";

import vendorSlice from "./slices/Vendor/VendorSlice";

const rootReducer = combineReducers({
  Vendor: vendorSlice,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
    devTools: true,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
