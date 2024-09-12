import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  MenuItem,
  Select,
  Box,
} from "@mui/material";

import Axis from "../../Assets/axis_bank.png";
import Hdfc from "../../Assets/hdfc_bank.png";
import Icici from "../../Assets/icici_bank.png";
import Kotak from "../../Assets/kotak_bank.png";
import Sbi from "../../Assets/sbi_bank.png";


const bankLogos = {
  axis: Axis,
  hdfc: Hdfc,
  icici: Icici,
  kotak: Kotak,
  sbi: Sbi,
};

const Netbanking = () => {
  const [selectedBank, setSelectedBank] = useState("axis");

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };
  
  return (
    <Box sx={{ marginLeft: "15px", marginTop: "15px" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        Net Banking
      </Typography>
      <RadioGroup value={selectedBank} onChange={handleBankChange}>
        <FormControlLabel
          sx={{margin:"10px"}}
          value="axis"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.axis} alt="Axis Bank" width={50} height={50} style={{ marginRight: 8 }} />
              Axis Bank
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"10px"}}
          value="hdfc"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.hdfc} alt="HDFC Bank" width={50} height={50} style={{ marginRight: 8 }} />
              HDFC Bank
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"10px"}}
          value="icici"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.icici} alt="ICICI Bank" width={50} height={50} style={{ marginRight: 8 }} />
              ICICI Bank
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"10px"}}
          value="kotak"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.kotak} alt="Kotak" width={50} height={50} style={{ marginRight: 8 }} />
              Kotak
            </Box>
          }
        />
        <FormControlLabel
          sx={{margin:"10px"}}
          value="sbi"
          control={<Radio sx={{ '&.Mui-checked': { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img src={bankLogos.sbi} alt="SBI" width={50} height={50} style={{ marginRight: 8 }} />
              SBI
            </Box>
          }
        />
      </RadioGroup>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff4081",
          color: "#fff",
          width: "100%",
          marginTop: "16px",
          padding: "12px",
          fontSize: "16px",
        }}
      >
        PAY NOW
      </Button>
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

export default Netbanking