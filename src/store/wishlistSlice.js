import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState: { data: [], loading: false },
  reducers: {
    addToWishlist: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload._id
      );
      if(itemIndex === -1){
        state.data.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.data));
      }
    },
    removeFromWishlist: (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.data));
    },
    isItemInWishlist: (state, action) => {

    }
  }
});


export const WishlistActions = wishlistSlice.actions;

export default wishlistSlice;