import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', 
  async () => {
    console.log("fetching Data");
    const response = await fetch("https://trendify-backend-0k4b.onrender.com/api/v1/allproducts");
    const jsonData = await response.json();
    return jsonData.products;
  }
);


const productsSlice = createSlice({
  name: "Products",
  initialState: { data: null },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        console.log("Fetching User Data");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("User Data Fetched");
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("Failed to fetch User Data");
        console.log(action.error.message);
      })
  }
});


export const productActions = productsSlice.actions;

export default productsSlice;