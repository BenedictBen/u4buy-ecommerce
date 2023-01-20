import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item) => item.id === id);

      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1
        });
      }
    },
    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    },
    remove(state, action) {
      const index = state.cart.findIndex(cartitem => cartitem.id !== action.payload)
      state.quantity -=1;
      state.total -= state.cart(index).price * state.cart[index].quantity;
      state.cart.splice(index,1);
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      );
    },
    clear(state) {
      return [];
    }
  }
});

export const { addToCart, increament, decrement, clear, remove } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
