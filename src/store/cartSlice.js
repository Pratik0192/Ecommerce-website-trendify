import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    }
  }
});


export const cartActions = cartSlice.actions;

export default cartSlice;