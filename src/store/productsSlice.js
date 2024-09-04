import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
  name: "Products",
  initialState: { data: null },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
});


export const productActions = productsSlice.actions;

export default productsSlice;