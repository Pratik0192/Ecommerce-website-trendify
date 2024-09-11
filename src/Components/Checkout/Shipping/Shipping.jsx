import React, { useContext, useState } from "react";
import { Grid, TextField, Typography, Button, FormControlLabel, Checkbox, Box } from "@mui/material";

import ShippingAmount from "../../ShippingAmount/ShippingAmount";
import ShippingAddress from "../../ShippingAddress/ShippingAddress";


const Shipping = () => {



  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: "2rem" }}>
      <Grid item xs={12} md={6}
        sx={{ 
          border: "1px solid #d4d5d9", 
          borderRadius: "5px", 
          paddingRight: "15px" }}
      >
       <ShippingAddress /> 
      </Grid>

      {/* PRICE DETAILS SECTION */}
      <Grid item xs={12} md={3}>
        <ShippingAmount />
      </Grid>
    </Grid>
  );
};

export default Shipping;
