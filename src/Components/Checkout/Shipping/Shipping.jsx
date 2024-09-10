import React, { useContext, useState } from "react";
import { Grid, TextField, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, Box } from "@mui/material";
import { Country, State } from "country-state-city";
import { ShopContext } from "../../../Context/ShopContext";
import { Link } from "react-router-dom";

const Shipping = () => {
  const { addShippingAddress } = useContext(ShopContext);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressType, setAddressType] = useState("Home");

  const shippingSubmit = (e) => {
    e.preventDefault();
    const shippingAddress = {
      address,
      city,
      state,
      country,
      pinCode,
      phoneNo,
      addressType,
    };
    addShippingAddress(shippingAddress);
    //window.location = "/checkout/confirm";
  };

  const detailsHeading = {
    fontSize:'12px',
    fontWeight:'700',
    color:'#282c3f',
    padding:'16px 16px 0'
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
      padding: "12px", // Adjust padding to balance label and input height
      height: "unset",
    },
    "& .MuiInputLabel-root": {
      top: "50%",
      transform: "translate(0, -50%) scale(1)", // Vertically center the label
      fontSize: "13px",
      paddingLeft:'18px',
      color:'#94969f',
      "&.Mui-focused": {
        top: "0", // Move the label upwards when focused
        transform: "translate(0, -35%) scale(0.80)", // Shrink and position correctly on focus
        color:'#282c3f',
      },
    },
  };

  const buttonStyle = {
    backgroundColor:'#ff3f6c',
    borderRadius:'4px',
    padding:'14px',
    fontSize:'14px',
    textTransform:'uppercase',
    marginBottom:'20px',
    '&:hover':{
      backgroundColor:'#ff3f6c',
    }
  }
  
  return (
      <Grid container spacing={2} justifyContent="center" sx={{ padding: "2rem"}}>
        <Grid item xs={12} md={4} sx={{border:'1px solid #d4d5d9', borderRadius:'5px', paddingRight:'15px'}}>
          <Typography sx={detailsHeading}>
            CONTACT DETAILS
          </Typography>
          <form onSubmit={shippingSubmit}>
            <Grid container spacing={2} sx={{marginTop:'3px'}}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
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
                <Typography sx={detailsHeading}>
                  ADDRESS
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pin Code"
                  variant="outlined"
                  required
                  type="number"
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
                  select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  sx={inputStyle}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="">Select State</option>
                  {country &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                  <Typography sx={detailsHeading}>SAVE ADDRESS AS</Typography>
                  <RadioGroup
                    row
                    value={addressType}
                    onChange={(e) => setAddressType(e.target.value)}
                  >
                    <FormControlLabel
                      value="Home"
                      control={<Radio />}
                      label="Home"
                    />
                    <FormControlLabel
                      value="Work"
                      control={<Radio />}
                      label="Work"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Make this my default address"
                />
              </Grid>
              <Grid item xs={12}>
                <Link to="/checkout/confirm">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={buttonStyle}
                  >
                    Add Address
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* PRICE DETAILS SECTION */}
        <Grid item xs={12} md={4}>
          <Box sx={{ padding: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              PRICE DETAILS (1 Item)
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <Typography variant="body1">Total MRP</Typography>
              <Typography variant="body1">₹899</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <Typography variant="body1">Discount on MRP</Typography>
              <Typography variant="body1" color="green">
                - ₹495
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <Typography variant="body1">Platform Fee</Typography>
              <Typography variant="body1" color="green">
                FREE
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <Typography variant="body1">Shipping Fee</Typography>
              <Typography variant="body1" color="green">
                FREE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              <Typography>Total Amount</Typography>
              <Typography>₹404</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};

export default Shipping;
