import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const fetchWishlistData = createAsyncThunk(
  'wishlist/fetchWishlistData',
  async (token) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/v1/wishlist/get`,
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

export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/wishlist/add`, 
      params.payload, 
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

export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/wishlist/remove`, 
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



const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState: { 
    data: [], 
    loading: false,
    wishlistItem: {},
    removeWishlistProductId: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchWishlistData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Wishlist: ", action.payload.wishlist);
        state.data = action.payload.wishlist;
      })
      .addCase(fetchWishlistData.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to fetch Wishlist");
      })
      .addCase(addToWishlist.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(state.wishlistItem);
        console.log("Item added to wishlist");

        //toast notification
        toast.success(`Added to wishlist!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to add to wishlist");
      })
      .addCase(removeFromWishlist.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(
          (item) => item.productId !== state.removeWishlistProductId
        );
        console.log("Item removed from wishlist");

        //toast notification
        toast.error(`Removed from wishlist!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to remove from wishlist");
      })
  },
  reducers: {
    setWishlistItem: (state, action) => {
      state.wishlistItem = action.payload;
    },
    setRemoveWishlistProductId: (state, action) => {
      state.removeWishlistProductId = action.payload;
    },
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
    }
  }
});


export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;