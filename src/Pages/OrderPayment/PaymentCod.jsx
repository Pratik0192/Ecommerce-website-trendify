import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import {
  Button, FormControlLabel, RadioGroup,Box, ListItemText,Radio, ListItemIcon
} from '@mui/material';
import { Link } from 'react-router-dom';


const PaymentCod = () => {
  const [selectedOpt, setSelectedOpt] = useState("cashondelivery");

  const handleOptSelect = (event) => {
    setSelectedOpt(event.target.value);
  };
  
  return (
    <Box sx={{ marginLeft: "15px", marginTop: "15px" }}>
      <Typography variant="h6" 
        sx={{ 
          marginBottom: "16px" , 
          marginLeft:"2px",
          fontSize:"18px", 
          fontWeight: "700",
          color:"#424553"
        }}
      >
        Cash On Delivery
      </Typography>
      <RadioGroup value={selectedOpt} onChange={handleOptSelect}>
        <FormControlLabel 
          sx={{margin:"10px"}}
          value="cashondelivery"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <ListItemIcon>
                <MoneyRoundedIcon sx={{ fontSize: 40, marginLeft: 0 }}/>
              </ListItemIcon>
              <ListItemText primary="Cash on Delivery(cash/UPI)" secondary="You can pay via Cash/UPI on delivery" />
            </Box>
          }
        />
      </RadioGroup>
    </Box>
  )
}

export default PaymentCod;