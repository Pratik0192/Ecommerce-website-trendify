import React,{useState} from 'react';
import { DialogActions, DialogContent, DialogTitle, Button, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import InfoIcon from "@mui/icons-material/Info";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CloseIcon from '@mui/icons-material/Close';

const DialogSavedCards = ({ onClose }) => {
  
  const textFieldActiveStateStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#555",
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#555",
      },
    },
  }

  return (
    <>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Add new Credit/Debit Card
        <IconButton>
            <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name on card"
          placeholder="Enter name as on card"
          variant="outlined"
          sx={{ marginTop: "20px" ,marginBottom: "16px", ...textFieldActiveStateStyle}}
        />
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
          sx={{ marginTop: "16px", ...textFieldActiveStateStyle}}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          fullWidth
          sx={{
            backgroundColor: '#ff3f6c',
            color: '#fff',
            "&:hover": {
              backgroundColor: "#ff3f6c",
              boxShadow: "none",
            },
          }}
          onClick={onClose}
        >
          Save Details
        </Button>
      </DialogActions>
    </>
  );
};

export default DialogSavedCards;