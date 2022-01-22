import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./products.reducer";
import categoryReducer from "./categories.reducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
