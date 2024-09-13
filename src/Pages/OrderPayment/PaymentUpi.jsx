import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  RadioGroup,
  Box,
  Radio,
  FormControlLabel,
  TextField,
} from "@mui/material";
import UPIlogo from "../../Components/Assets/upi-logo.png";
import Phonepe from "../../Components/Assets/phonepayupi.png";



const PaymentUpi = () => {
  const [selectedOpt2, setSelectedOpt2] = useState("phonepe");
  const [upiId, setUpiId] = useState("");

  const handleOpt2Select = (event) => {
    setSelectedOpt2(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  return (
    <Box sx={{ marginLeft: "15px", marginTop: "15px" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        Pay using UPI
      </Typography>
      <RadioGroup value={selectedOpt2} onChange={handleOpt2Select}>
        <FormControlLabel
          sx={{ margin: "10px" }}
          value="phonepe"
          control={<Radio sx={{ "&.Mui-checked": { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img
                src={Phonepe}
                alt="phonepe"
                width={50}
                height={50}
                style={{ marginRight: 8 }}
              />
              PhonePe
            </Box>
          }
        />
        <FormControlLabel
          sx={{ margin: "10px" }}
          value="upi"
          control={<Radio sx={{ "&.Mui-checked": { color: "#FF4141" } }} />}
          label={
            <Box display="flex" alignItems="center">
              <img
                src={UPIlogo}
                alt="UPI"
                width={50}
                height={50}
                style={{ marginRight: 8 }}
              />
              Enter UPI ID
            </Box>
          }
        />
      </RadioGroup>
      {/* Conditionally render the UPI ID text field */}
      {selectedOpt2 === "upi" && (
        <TextField
          label="Enter UPI ID"
          variant="outlined"
          value={upiId}
          onChange={handleUpiIdChange}
          fullWidth
          sx={{ marginTop: "16px" }}
        />
      )}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff4081",
          color: "#fff",
          width: "100%",
          marginTop: "16px",
          padding: "12px",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "#ff4081",
          },
        }}
      >
        PAY NOW
      </Button>
    </Box>
  );
};

export default PaymentUpi;
