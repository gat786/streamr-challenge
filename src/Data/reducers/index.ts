import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./products.reducer";

const rootReducer = combineReducers({
  productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
