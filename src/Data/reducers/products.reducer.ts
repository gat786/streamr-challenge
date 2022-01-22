import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "config";
import { Product } from "Data/model/Product";
import { getProductsService } from "Data/services/products.service";

export const getProducts = createAsyncThunk(
  "ProductSlice",
  async (payload, thunkApi) => {
    try {
      const response = await getProductsService({
        params: { publicAccess: true, max: config.pageSize },
      });
      if (response.isSuccessful) {
        return response.data;
      }
    } catch {
      return thunkApi.rejectWithValue({ payload });
    }
  }
);

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: {} as { [key: string]: Product },
  },
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled.type]: (state, action) => {
      const products = action?.payload as Product[];
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export default productSlice.reducer;
