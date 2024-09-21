import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', 
  async (params) => {
    const { category, keyword, brand, sort, price, page, limit } = params;
    const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/products?category=${category}&keyword=${keyword}&brand=${brand}&price=${price}&sort=${sort}&page=${page}&limit=${limit}`);
    const jsonData = await response.json();
    return jsonData;
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
    loading: false,
    page: {
      totalProductsCount: 0,
      pageLength: 0,
      totalPages: 0,
      currentPage: 1,
    },
    fetchParams: {
      keyword: "",
      brand: "",
      sort: "",
      price: "",
    },
    renderProductsFlag: true,
    triggerKeywordChange: true,
    product: null,
    loadingProduct: false,
    brands: [],
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
    },
    setCurrentPage: (state, action) => {
      state.page.currentPage = action.payload;
    },
    setfetchParams: (state, action) => {
      if(action.payload.keyword !== undefined){
        state.fetchParams.keyword = action.payload.keyword;
      }
      if(action.payload.brand !== undefined){
        state.fetchParams.brand = action.payload.brand;
      }
      if(action.payload.sort !== undefined){
        state.fetchParams.sort = action.payload.sort;
      }
      if(action.payload.price !== undefined){
        state.fetchParams.price = action.payload.price;
      }
    },
    setfetchParamKeyword: (state, action) => {
      state.fetchParams.keyword = action.payload
    },
    resetFetchParams: (state, action) => {
      //state.fetchParams.keyword = "";
      state.fetchParams.brand = "";
      state.fetchParams.sort = "";
      state.fetchParams.price = "";
    },
    setTriggerKeywordChange: (state, action) => {
      state.triggerKeywordChange = action.payload;
    },
    setRenderProductsFlag: (state, action) => {
      state.renderProductsFlag = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload.products;
        state.page.totalProductsCount = action.payload.totalCount;
        state.page.pageLength = action.payload.pageLength;
        if(state.page.currentPage === 1){
          const denominator = action.payload.pageLength !== 0 ?
            action.payload.pageLength : 1;
          state.page.totalPages = Math.ceil(
            action.payload.totalCount/denominator
          );
        }
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