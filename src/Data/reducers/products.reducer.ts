import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "Data/model/Product";

const productSlice = createSlice({
  name: "demoSlice",
  initialState: {
    products: {} as { [key: string]: Product },
  },
  reducers: {},
  extraReducers: {},
});

export default productSlice.reducer;
