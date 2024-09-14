import React, { useState } from 'react';
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  MenuItem,
  Select,
  Box,
} from "@mui/material";

import Axis from "../../Components/Assets/axis_bank.png";
import Hdfc from "../../Components/Assets/hdfc_bank.png";
import Icici from "../../Components/Assets/icici_bank.png";
import Kotak from "../../Components/Assets/kotak_bank.png";
import Sbi from "../../Components/Assets/sbi_bank.png";


const bankLogos = {
  axis: Axis,
  hdfc: Hdfc,
  icici: Icici,
  kotak: Kotak,
  sbi: Sbi,
};


const PaymentNetbanking = () => {
  const [selectedBank, setSelectedBank] = useState("axis");

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };
  
  return (
    <Box sx={{ marginLeft: "15px", marginTop: "15px" }}>
      <Typography variant="h6" 
        sx={{
          marginBottom: "16px",
          fontSize:"18px", 
          fontWeight: "700",
          color:"#424553",
        }}
      >
        Net Banking
      </Typography>
      <RadioGroup value={selectedBank} onChange={handleBankChange}>
        <FormControlLabel
          sx={{margin:"6px"}}
          value="axis"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.axis} alt="Axis Bank" width={60} height={60} style={{ marginRight: 8 }} />
              Axis Bank
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"6px"}}
          value="hdfc"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.hdfc} alt="HDFC Bank" width={60} height={60} style={{ marginRight: 8 }} />
              HDFC Bank
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"6px"}}
          value="icici"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.icici} alt="ICICI Bank" width={60} height={60} style={{ marginRight: 8 }} />
              ICICI Bank
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"6px"}}
          value="kotak"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.kotak} alt="Kotak" width={60} height={60} style={{ marginRight: 8 }} />
              Kotak
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"6px"}}
          value="sbi"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.sbi} alt="SBI" width={60} height={60} style={{ marginRight: 8 }} />
              SBI
            </Box>
          }
        />
      </RadioGroup>
      <Select
        defaultValue=""
        displayEmpty
        sx={{ marginTop: "16px", width: "100%" }}
      >
        <MenuItem value="">
          <em>Other Banks</em>
        </MenuItem>
        <MenuItem value={10}>Bank of Baroda</MenuItem>
        <MenuItem value={20}>Punjab National Bank</MenuItem>
      </Select>
    </Box>
  )
}

export default PaymentNetbanking