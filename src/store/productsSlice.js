import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', 
  async (category) => {
    category = encodeURIComponent(category);
    const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/products?category=${category}`);
    const jsonData = await response.json();
    return jsonData.products;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/product/${productId}`);
    //console.log("From ProductSlice", res.data);
    return res.data;
  }
);

export const fetchAllBrands = createAsyncThunk(
  'products/fetchAllBrands',
  async (category) => {
    category = encodeURIComponent(category);
    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/products/brands?category=${category}`);
    return res.data.companies;
  }
)

const productsSlice = createSlice({
  name: "Products",
  initialState: { 
    data: [],
    product: null,
    brands: [],
    loading: false,
    loadingProduct: false,
    fetchProductsDone: false
  },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
    resetProductsList: (state, action) => {
      state.data = [];
    },
    resetProduct: (state, action) => {
      state.product = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.fetchProductsDone = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      })
      .addCase(fetchProductById.pending, (state, action) => {
        state.loadingProduct = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loadingProduct = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        console.log(action.error.message);
        state.loadingProduct = false;
      })
      .addCase(fetchAllBrands.pending, (state, action) => {
      })
      .addCase(fetchAllBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(fetchAllBrands.rejected, (state, action) => {
        console.log(action.error.message);
      })
  }
});


export const productActions = productsSlice.actions;

export default productsSlice;