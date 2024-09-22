import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import userSlice from "./userSlice";
import orderSlice from "./orderSlice";


const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    user: userSlice.reducer,
    order: orderSlice.reducer
  }
});

export default store;