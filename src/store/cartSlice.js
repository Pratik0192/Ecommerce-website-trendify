import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async (token) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/v1/cart/get`,
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      }
    );
    return res.data;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (params) => {
    const { stock, return_period, ...restObj } = params.payload;
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/cart/add`, 
      restObj, 
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': params.token
        }
      }
    );
    return res.data;
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/cart/remove`, 
      { productId: params.productId }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': params.token
        }
      }
    );
    return res.data;
  }
);

export const incrementCartItemQuantity = createAsyncThunk(
  'cart/incrementCartItemQuantity',
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/cart/increment`, 
      { productId: params.productId }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': params.token
        }
      }
    );
    return res.data;
  }
);

export const decrementCartItemQuantity = createAsyncThunk(
  'cart/decrementCartItemQuantity',
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/cart/decrement`, 
      { productId: params.productId }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': params.token
        }
      }
    );
    return res.data;
  }
);



const cartSlice = createSlice({
  name: "Cart",
  initialState: { 
    data: [],
    loading: false,
    changingQuantity: false,
    cartItem: {},
    removeCartProductId: null,
    totalItems: 0,
    priceDetails: {
      totalMrp: 0,
      totalDiscount: 0,
      totalAmount: 0
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.fulfilled, (state, action) => {
        console.log("Cart: ", action.payload.cart);
        state.data = action.payload.cart;
        let numItems = 0;
        action.payload.cart.forEach((item) => {
          numItems += item.quantity;
        });
        state.totalItems = numItems;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        console.log("Failed to fetch Cart Data");
      })
      .addCase(addToCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("Item Added to cart");
        state.loading = false;
        state.data.push(state.cartItem);
        state.totalItems += 1;

        //toast notification
        toast.success("Added to cart!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        console.log("Cannot Add to cart");
      })
      .addCase(removeFromCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        console.log("Item Removed from cart");
        state.loading = false;
        let itemIndex = state.data.findIndex(
          (item) => item.productId === state.removeCartProductId
        );
        state.totalItems -= state.data[itemIndex].quantity;
        state.data = state.data.filter(
          (item) => item.productId !== state.removeCartProductId
        );

        //remove from cart toast
        toast.error(`Removed from cart!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to remove from cart.");
      })
      .addCase(incrementCartItemQuantity.pending, (state, action) => {
        state.changingQuantity = true;
      })
      .addCase(incrementCartItemQuantity.fulfilled, (state, action) => {
        state.changingQuantity = false;
        console.log("Cart Quantity + 1");
        let itemIndex = state.data.findIndex(
          (item) => item.productId === action.payload.productId
        );
        if(itemIndex !== -1){
          state.data[itemIndex].quantity += 1;
          state.totalItems += 1;
        }
      })
      .addCase(decrementCartItemQuantity.pending, (state, action) => {
        state.changingQuantity = true;
      })
      .addCase(decrementCartItemQuantity.fulfilled, (state, action) => {
        state.changingQuantity = false;
        console.log("Cart Quantity - 1");
        let itemIndex = state.data.findIndex(
          (item) => item.productId === action.payload.productId
        );
        if(itemIndex !== -1){
          if(state.data[itemIndex].quantity === 1){
            state.data = state.data.filter(
              (item) => item.productId !== action.payload.productId
            );
          } else {
            state.data[itemIndex].quantity -= 1;
          }
          state.totalItems -= 1;
        }
      })
  },
  reducers: {
    setCartItem: (state, action) => {
      const { stock, return_period, ...restObj } = action.payload;
      state.cartItem = restObj;
    },
    setRemoveCartProductId: (state, action) => {
      state.removeCartProductId = action.payload;
    },
    calculateTotalPrice: (state, action) => {
      let totalMrp = 0;
      let totalDiscount = 0;
      let totalAmount = 0;
      state.data.forEach((item) => {
        totalMrp += item.original_price * item.quantity;
        totalDiscount += (item.original_price - item.current_price) * item.quantity;
        totalAmount += item.current_price * item.quantity;
      });
      state.priceDetails.totalMrp = totalMrp;
      state.priceDetails.totalDiscount = totalDiscount;
      state.priceDetails.totalAmount = totalAmount;
    },
    addToCart: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload._id
      );
      if(itemIndex === -1){
        state.data.push(action.payload);
        state.totalItems += 1;
        let itemObj = action.payload;
        state.priceDetails.totalMrp += 
          (itemObj.original_price) * itemObj.quantity;
        state.priceDetails.totalDiscount += 
          (itemObj.original_price - itemObj.current_price) * itemObj.quantity;
        state.priceDetails.totalAmount += 
          (itemObj.current_price) * itemObj.quantity;
      }
      else {
        console.log("Item already present");
      }
    },
    removeFromCart: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload
      );
      state.totalItems -= state.data[itemIndex].quantity;

      let itemObj = state.data[itemIndex];
      state.priceDetails.totalMrp -= 
        (itemObj.original_price) * itemObj.quantity;
      state.priceDetails.totalDiscount -= 
        (itemObj.original_price - itemObj.current_price) * itemObj.quantity;
      state.priceDetails.totalAmount -= 
        (itemObj.current_price) * itemObj.quantity;

      state.data = state.data.filter((item) => item._id !== action.payload);
    },
    incrementCartItemQuantity: (state, action) => {
      let itemIndex = state.data.findIndex(
        (item) => item._id === action.payload
      );
      if(state.data[itemIndex].quantity < 10){
        state.data[itemIndex].quantity += 1;
        state.totalItems += 1;
        let itemObj = state.data[itemIndex];
        state.priceDetails.totalMrp += itemObj.original_price;
        state.priceDetails.totalDiscount += 
          itemObj.original_price - itemObj.current_price;
        state.priceDetails.totalAmount += itemObj.current_price;
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

      let itemObj = state.data[itemIndex];
      state.priceDetails.totalMrp -= itemObj.original_price;
      state.priceDetails.totalDiscount -= 
        itemObj.original_price - itemObj.current_price;
      state.priceDetails.totalAmount -= itemObj.current_price;
      
      if(state.data[itemIndex].quantity === 1){
        state.data = state.data.filter((item) => item._id !== action.payload);
      }
      else {
        state.data[itemIndex].quantity -= 1;
      }
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