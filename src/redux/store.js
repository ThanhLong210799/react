import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import createDataSlice from "../features/create/createDataSlice";
import { baseApi } from "../services/baseApi";

// add service vào store
const store = configureStore({
  reducer: {
    product: createDataSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware)
});

setupListeners(store.dispatch);

export default store;

