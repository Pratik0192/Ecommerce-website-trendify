import React, { useState } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import ShippingAmount from "../../ShippingAmount/ShippingAmount";
import ShippingAddress from "../../ShippingAddress/ShippingAddress";

const Shipping = () => {
  const [hasAddress, setHasAddress] = useState(false);

  const savedAddress = {
    name: "Pratik Chakraborty",
    type: "Home",
    address: "1/1A, Kedar Nath Das Lane, Kolkata, West Bengal - 700030",
    mobile: "7595029561",
    codAvailable: false,
  };

  const handleAddNewAddress = () => {
    setHasAddress(false);
  };

  const savedAddressStyle = {
    fontSize: '13px',
    color: '#424553'
  };

  const addressButtonStyle = {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '12px',
    borderRadius: '4px',
    color: "#282c3f",
    padding: '6.5px 16px',
    border: '1px solid #282c3f',
    '&:hover': {
      borderColor: '#282c3f',
      backgroundColor:'#ffffff'
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: "2rem" }}>
      {/* SHIPPING ADDRESS SECTION */}
      {/* Move the Titles outside the Grid */}
      {hasAddress && (
        <Grid item xs={12} sx={{ marginBottom: "1rem"}}>
          <Box sx={{display:'flex', justifyContent:'space-between', marginLeft:'138px',marginBottom:'10px',width:'734px'}}>
            <Typography sx={{fontSize:'18px', color:'#282c3f', fontWeight:'700'}}>Select Delivery Address</Typography>
            <Button variant="outlined" sx={addressButtonStyle}>Add new Address</Button>
          </Box>
          <Typography sx={{fontSize:'12px', color:'#535766', fontWeight:'700', marginLeft:'138px'}} >DEFAULT ADDRESS</Typography>
        </Grid>
      )}

      <Grid item xs={12} md={6}
        sx={{
          border: "1px solid #d4d5d9",
          borderRadius: "5px",
          paddingRight: "15px",
        }}
      >
        {/* CONDITIONAL RENDERING: Check if user has an address */}
        {hasAddress ? (
          <Grid container spacing={1} sx={{ padding: "1rem", marginBottom: "1rem" }}>
            <Grid item xs={12}>
              <Typography sx={{fontSize:'14px', color:'#282c3f', fontWeight:'700'}}>
                {savedAddress.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={savedAddressStyle}>{savedAddress.address}</Typography>
              <Typography sx={savedAddressStyle}>
                Mobile: <span style={{ fontWeight: '700' }}>{savedAddress.mobile}</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={savedAddressStyle}>
                {savedAddress.codAvailable ? "Pay on Delivery available" : "Pay on Delivery not available"}
              </Typography>
            </Grid>
            {/* Buttons to edit or remove address */}
            <Grid item xs={12} container spacing={2}>
              <Grid item>
                <Button variant="outlined" sx={addressButtonStyle}>
                  Remove
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" sx={addressButtonStyle}>
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <ShippingAddress />
        )}
        {/* Add new address button */}
        {!hasAddress && (
          <Box mt={2} display="flex" justifyContent="flex-start">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setHasAddress(true)}
            >
              Save Address
            </Button>
          </Box>
        )}
      </Grid>

      {/* PRICE DETAILS SECTION */}
      <Grid item xs={12} md={3.5}>
        <ShippingAmount />
      </Grid>
      {/* Add New Address Button - Moved Below the Grid */}
      {hasAddress && (
        <Grid item xs={12}>
          <Box sx={{display:'flex', justifyContent:'space-between', marginLeft:'138px', marginTop:'10px', width:'734px'}}>
            <Button variant="outlined" sx={addressButtonStyle} onClick={handleAddNewAddress}>Add New Address</Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Shipping;
