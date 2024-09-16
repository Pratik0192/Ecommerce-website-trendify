import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDetails) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/register`, 
      userDetails
    );
    console.log("Register", res.data);
    return res.data;
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userDetails) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/login`, 
      userDetails
    );
    console.log("Login", res.data);
    return res.data;
  }
)


export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (token) => {
    console.log("fetching User Details");
    const res = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/v1/userdetails`,
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      }
    );
    console.log("UserDetails Fetched: ", res.data);
    return res.data;
  }
)



const userSlice = createSlice({
  name: "User",
  initialState: { 
    isUserLoggedIn: false, 
    userData: null, 
    token: null, 
    loading: false,
    authMessage: "",
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("Successfully Registered User");
        state.authMessage = action.payload.message;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authMessage = action.payload.message;
        state.loading = false;
        console.log(action.error.message);
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authMessage = action.payload.message;
        console.log("Successfully Logged in User", action.payload.token);
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.loading = false;
        state.isUserLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authMessage = action.payload.message;
        state.loading = false;
        console.log(action.error.message);
      })
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.loading = true;
        console.log("Fetching User Data");
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        console.log("User Data Fetched");
        state.isUserLoggedIn = true;
        state.userData = action.payload.user;
        state.token = localStorage.getItem("token");
        state.loading = false;
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