import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";


const detailsHeading = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#282c3f",
  padding: "16px 16px 0",
  marginLeft: "-14px",
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d4d5d9",
    },
    "&:hover fieldset": {
      borderColor: "#282c3f",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#282c3f",
    },
  },
  "& .MuiInputBase-input": {
    color: "#282c3f",
    fontSize: "14px",
    fontWeight: "300",
    padding: "12px",
    height: "unset",
  },
  "& .MuiInputLabel-root": {
    top: "50%",
    transform: "translate(0, -50%) scale(1)",
    fontSize: "13px",
    paddingLeft: "18px",
    color: "#94969f",
    transition: "transform 0.4s ease, top 0.4s ease",
    "&.Mui-focused, &.MuiFormLabel-filled": {
      top: "0",
      transform: "translate(0, -35%) scale(0.90)",
      color: "#282c3f",
    },
  },
};

const addressButtonStyle = {
  marginRight: "10px",
  borderRadius: "20px",
  fontSize: "12px",
  padding: "4px 16px",
  color: "#282c3f",
  border: "1px solid #282c3f",
  "&:hover": {
    border: "1px solid #ff3f6c",
    color: "#ff3f6c",
    backgroundColor: "#ffffff",
  },
  "&:active": {
    border: "1px solid #ff3f6c",
    color: "#ff3f6c",
    backgroundColor: "#ffffff",
  },
};


const AddressForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressType, setAddressType] = useState("Home");

  const shippingSubmit = (e) => {
    e.preventDefault();
    console.log("Add Address");
    const shippingAddress = {
      name,
      address,
      city,
      state,
      country,
      pinCode,
      phoneNo,
      addressType,
    };
    // window.location = "/checkout/confirm";
  };
  return (
    <div>
      <Box sx={{ borderRadius: "10px", padding: "20px" }}>
        <Typography sx={detailsHeading}>CONTACT DETAILS</Typography>
        <form onSubmit={shippingSubmit}>
          <Grid container spacing={2} sx={{ marginTop: "3px" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile No"
                variant="outlined"
                required
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={detailsHeading}>ADDRESS</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Pin Code"
                variant="outlined"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address (House No, Building, Street, Area)"
                variant="outlined"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Locality / Town"
                variant="outlined"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City / District"
                variant="outlined"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={detailsHeading}>SAVE ADDRESS AS</Typography>
              <Box sx={{ display: "flex", marginTop: "12px" }}>
                <Button variant="outlined" sx={addressButtonStyle}>
                  HOME
                </Button>
                <Button variant="outlined" sx={addressButtonStyle}>
                  WORK
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Make this my default address"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default AddressForm;
