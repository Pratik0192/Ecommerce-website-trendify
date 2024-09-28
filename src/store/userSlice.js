import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDetails) => {
    let payload = {};
    await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/register`, 
      userDetails
    ).then(res => {
      payload.status = 200;
      payload.message = res.data.message;
    }).catch(err => {
      payload.status = err.response.status
      payload.message = err.response.data.message;
    });
    return payload;
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userDetails) => {
    let payload = {};
    await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/login`, 
      userDetails
    ).then(res => {
      payload.status = 200;
      payload.message = res.data.message;
      payload.token = res.data.token;
    }).catch(err => {
      payload.status = err.response.status;
      payload.message = err.response.data.message;
    });
    return payload;
  }
);

export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (token) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/v1/userdetails`,
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


export const getUserAddresses = createAsyncThunk(
  'user/getUserAddresses',
  async (token) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/v1/user/address/get`,
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


export const createUserAddress = createAsyncThunk(
  'user/createUserAddress',
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASEURL}/api/v1/user/address/add`,
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


export const updateUserAddress = createAsyncThunk(
  'user/updateUserAddress',
  async (params) => {
    const res = await axios.put(
      `${process.env.REACT_APP_BASEURL}/api/v1/user/address/edit/${params.addressId}`,
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


export const deleteUserAddress = createAsyncThunk(
  'user/deleteUserAddress',
  async (params) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_BASEURL}/api/v1/user/address/delete/${params.addressId}`,
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




const userSlice = createSlice({
  name: "User",
  initialState: { 
    isUserLoggedIn: false, 
    userData: null, 
    token: null,
    loading: false,
    address: null,
    statusCode: 0,
    authMessage: null,
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    resetStatusCode: (state, action) => {
      state.statusCode = 0;
    },
    resetAutmMessage: (state, action) => {
      state.authMessage = null;
    },
    setAddressState: (state, action) => {
      state.address = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.statusCode = action.payload.status;
        state.authMessage = action.payload.message;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusCode = action.payload.status;
        state.authMessage = action.payload.message;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.loading = false;
        state.isUserLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      })
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        console.log("UserDetails: ", action.payload);
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
      .addCase(createUserAddress.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createUserAddress.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Address Posted Successfully");
        state.userData.address.push(action.payload.address);
      })
      .addCase(createUserAddress.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to post address");
      })
      .addCase(updateUserAddress.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUserAddress.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Address Updated Successfully");
        const addressIndex = state.userData.address.findIndex(
          (address) => address._id === action.payload.address._id
        );
        if(addressIndex !== -1){
          state.userData.address[addressIndex] = action.payload.address;
        }
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to update address");
      })
      .addCase(deleteUserAddress.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUserAddress.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Address Deleted Successfully");
        state.userData.address = state.userData.address.filter(
          (address) => address._id !== action.payload.addressId
        );
      })
      .addCase(deleteUserAddress.rejected, (state, action) => {
        state.loading = false;
        console.log("Failed to delete address");
      })
  }
});


export const userActions = userSlice.actions;

export default userSlice;