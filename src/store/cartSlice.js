import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "Cart",
  initialState: { data: [], loading: false, totalItems: 0 },
  reducers: {
    addToCart: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload._id
      );
      if(itemIndex === -1){
        state.data.push(action.payload);
        state.totalItems += 1;
      }
      else {
        console.log("Item already present");
      }
    },
    incrementCartItemQuantity: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload
      );
      if(state.data[itemIndex].quantity < 10){
        state.data[itemIndex].quantity += 1;
        state.totalItems += 1;
      }
      else {
        console.log("Quantity > 10");
      }
    },
    decrementCartItemQuantity: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload
      );
      state.totalItems -= 1;
      if(state.data[itemIndex].quantity === 1){
        state.data = state.data.filter((item) => item._id !== action.payload);
      }
      else {
        state.data[itemIndex].quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload
      );
      state.totalItems -= state.data[itemIndex].quantity;
      state.data = state.data.filter((item) => item._id !== action.payload);
    },
    getTotalCartItems: (state, action) => {
      let numItems = 0;
      state.data.forEach((item) => {
        numItems += item.quantity;
      });
      state.totalItems = numItems;
    }
  }
});


export const cartActions = cartSlice.actions;

export default cartSlice;