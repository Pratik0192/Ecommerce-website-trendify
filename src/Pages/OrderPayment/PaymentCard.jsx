import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Button,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import InfoIcon from "@mui/icons-material/Info";


const PaymentCard = () => {

  const textFieldActiveStateStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#555", // Change the border color when focused
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#555", // Change label color when focused
      },
    },
  }

  return (
    <Box sx={{ marginLeft: "15px", marginTop: "15px" }}>
      <Typography variant="h6" 
        sx={{ 
          marginBottom: "16px" ,
          fontSize:"18px", 
          fontWeight: "700",
          color:"#424553"
        }}
      >
        Credit/Dedit Card
      </Typography>

      {/* Instant Discount Offer */}
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px",
          border: "1px solid #ddd",
          textAlign: "left",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          12% Instant Discount
        </Typography>
        <Typography variant="body2" color="textSecondary">
          On RuPay Credit Cards on min spend of ₹4,000. T&C
        </Typography>
      </Box>

      {/* Form Fields */}
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginBottom: "8px" }}
      >
        Please Ensure your card can be used for online transactions.{" "}
        <Typography component="span" sx={{ color: "#ff4081" }}>
          Know More
        </Typography>
      </Typography>

      {/* Card Number Field */}
      <TextField
        fullWidth
        label="Card Number"
        placeholder="Enter card number"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CreditCardIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: "16px", ...textFieldActiveStateStyle }}
      />

      {/* Name on Card Field */}
      <TextField
        fullWidth
        label="Name on card"
        placeholder="Enter name as on card"
        variant="outlined"
        sx={{ marginBottom: "16px", ...textFieldActiveStateStyle }}
      />

      {/* Valid Through and CVV Fields */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Valid Thru (MM/YY)"
            placeholder="MM/YY"
            variant="outlined"
            sx={textFieldActiveStateStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="CVV"
            placeholder="Enter CVV"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={textFieldActiveStateStyle}
          />
        </Grid>
      </Grid>      
    </Box>
  );
};

export default PaymentCard;
