import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async () => {
    console.log("fetching User Details");
    const { data } = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/user`);
    console.log("From ProductSlice", data);
    return data;
  }
)


const userSlice = createSlice({
  name: "User",
  initialState: { user: {}, loading: false },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.loading = true;
        console.log("Fetching User Data");
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        console.log("User Data Fetched");
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        console.log("Failed to fetch User Data");
        state.loading = false;
        console.log(action.error.message);
      })
  }
});


export const userActions = userSlice.actions;

export default userSlice;