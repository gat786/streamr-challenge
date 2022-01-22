import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "Data/model/Category";
import { getCategoriesService } from "Data/services/categories.service";

export const getCategories = createAsyncThunk(
  "CategorySlice/getCategories",
  async (payload, thunkAPI) => {
    try {
      const response = await getCategoriesService();
      if (response.isSuccessful) {
        return response.data;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ payload });
    }
  }
);

const categorySlice = createSlice({
  name: "CategorySlice",
  initialState: {
    categories: [] as Category[],
  },
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled.type]: (state, action) => {
      const categories = action?.payload as Category[];
      state.categories = categories;
    },
  },
});

export default categorySlice.reducer;
