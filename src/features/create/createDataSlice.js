import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "product",
  initialState: {
    name: "",
    origin: "",
    price: "",
  },
  reducers: {
    createData1: (state, action) => {
      state.name = action.payload.name;
      state.origin = action.payload.origin;
    },
    createData2: (state, action) => {
      state.price = action.payload.price;
    },
  },
});
