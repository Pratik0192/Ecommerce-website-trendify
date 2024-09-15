import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', 
  async () => {
    console.log("fetching Data");
    const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/allproducts`);
    const jsonData = await response.json();
    return jsonData.products;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/product/${productId}`);
      
    console.log("From ProductSlice", res.data);
    return res.data;
  }
)


const productsSlice = createSlice({
  name: "Products",
  initialState: { 
    data: null,
    product: null,
    loading: false,
    loadingProduct: false,
    fetchProductsDone: false
  },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
    resetProduct: (state, action) => {
      state.product = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        console.log("Fetching Products");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("Products Fetched");
        state.data = action.payload;
        state.loading = false;
        state.fetchProductsDone = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("Failed to fetch Products");
        console.log(action.error.message);
        state.loading = false;
      })
      .addCase(fetchProductById.pending, (state, action) => {
        state.loadingProduct = true;
        console.log("Fetching Single Product");
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loadingProduct = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        console.log("Failed to fetch Single Product");
        console.log(action.error.message);
        state.loadingProduct = false;
      })
  }
});


export const productActions = productsSlice.actions;

export default productsSlice;