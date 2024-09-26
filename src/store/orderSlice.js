import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
  name: "Order",
  initialState: {
    data: [],
    loading: false
  },
  reducers: {
    fetchOrder: (state, action) => {
      state.data = action.payload;
    }
  }
});


export const orderActions = orderSlice.actions;

export default orderSlice;