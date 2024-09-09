import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let itemIndex = state.findIndex(
        (item) => item._id === action.payload._id
      );
      if(itemIndex === -1){
        state.push(action.payload);
      }
      else {
        console.log("Item already present");
      }
    },
    incrementCartItemQuantity: (state, action) => {
      let itemIndex = state.findIndex(
        (item) => item._id === action.payload
      );
      if(state[itemIndex].quantity < 10){
        state[itemIndex].quantity += 1;
      }
      else {
        console.log("Quantity > 10");
      }
    },
    decrementCartItemQuantity: (state, action) => {
      let itemIndex = state.findIndex(
        (item) => item._id === action.payload
      );
      if(state[itemIndex].quantity === 1){
        return state.filter((item) => item._id !== action.payload);
      }
      else {
        state[itemIndex].quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    }
  }
});


export const cartActions = cartSlice.actions;

export default cartSlice;