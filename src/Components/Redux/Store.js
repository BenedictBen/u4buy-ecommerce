import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer
  }
});


