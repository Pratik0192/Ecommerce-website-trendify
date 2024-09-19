import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Divider,
  colors,
} from '@mui/material';
import trial_image_return from '../Assets/product_10.png'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// #282c3f, #03a685, #7e818c, #ff3f6c

const radioLabeStyle = {
  fontSize:'14px',
  color:'#7e818c'
}

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

  const buttonStyle = {
    padding: '10px 20px', // Adjust padding as needed
    backgroundColor: '#ff3f6c',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',  // Center vertically
    width: '40%',         // Set width as per your requirement
    '&:hover': {
      backgroundColor: '#ff3f6c',
    },
  };

  const radioButtonSTyle = {
    '&.Mui-checked': {
      color: '#ff3f6c',
    },
  }

const OrderCancelReason = ({onCancelConfirm}) => {
  return (
    <Box sx={{backgroundColor:'#f5f5f6', padding:'10px', width:'100%'}}>
      <Box sx={{backgroundColor:'#ffffff', padding:'20px'}}>
        <Box sx={{display:'flex',backgroundColor:'#f5f5f6', margin:'auto', borderRadius:'4px', padding:'10px'}}>
          <img src={trial_image_return} alt="" style={{width:'80px'}} />
          <Box sx={{marginLeft:'10px'}}>
            <Typography sx={{fontSize:'15px', color:'#282c3f', fontWeight:'700'}}>
              Roadster
            </Typography>
            <Typography sx={{fontSize:'15px', color:'#282c3f'}}>
              Maroon women top
            </Typography>
            <Typography sx={{fontSize:'15px', color:'#282c3f'}}>
              Size: S
            </Typography>
            <Typography sx={{fontSize:'15px', color:'#282c3f'}}>
              <span style={{marginRight:'5px'}}>Rs.499</span>
              <span style={{marginRight:'5px', textDecoration:'line-through'}}>Rs.999</span>
              <span style={{marginRight:'5px', fontWeight:'700', color:'#03a685'}}>Saved Rs.499</span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', marginTop:'20px', marginBottom:'15px'}}>
          <Typography sx={{color:'#282c3f', fontSize:'15px'}}>
            Eligible for Cancellation
          </Typography>
          <Typography sx={{color:'#ff3f6c', fontSize:'15px', fontWeight:'700'}}>
            Return Policy
          </Typography>
        </Box>
      </Box>

      {/* order cancel reason */}
      <Box sx={{marginTop:'10px', padding:'20px', backgroundColor:'#ffffff'}}>
        <Typography sx={{fontSize:'16px', fontWeight:'700', color:'#282c3f'}}>
          Reason for cancellation
        </Typography>
        <Typography sx={{fontSize:'13px', color:'#7e818c'}}>
          Please tell us correct reason for cancellation. This information is only used to improve our service
        </Typography>
        <Divider sx={{marginTop:'10px', marginBottom:'10px'}}/>
        <FormControl>
          <Typography sx={{fontSize:'16px', fontWeight:'700', color:'#7e818c'}}>
            Select Reason*
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel 
              value="Incorrect size ordered" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Incorrect size ordered
                </Typography>}
            />
            <FormControlLabel 
              value="Product not required anymore" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Product not required anymore
                </Typography>}
            />
            <FormControlLabel 
              value="Cash issue" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Cash issue
                </Typography>}
            />
            <FormControlLabel 
              value="Ordered by Mistake" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Ordered by Mistake
                </Typography>}
            />
            <FormControlLabel 
              value="Wants to change style/color" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Wants to change style/color
                </Typography>}
            />
            <FormControlLabel 
              value="Delayed Delivery Cancellation" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Delayed Delivery Cancellation
                </Typography>}
            />
            <FormControlLabel 
              value="Duplicate Order" 
              control={<Radio sx={radioButtonSTyle}/>} 
              label={
                <Typography sx={radioLabeStyle}>
                  Duplicate Order
                </Typography>}
            />
          </RadioGroup>
        </FormControl>
        <Divider sx={{marginTop:'10px', marginBottom:'10px'}}/>
        <TextField variant='outlined' label='Additional comments' sx={{...inputStyle, width:'100%'}}/> 
      </Box>

      {/* cancel button part */}
      <Box sx={{marginTop:'10px', padding:'20px', backgroundColor:'#ffffff', display:'flex', justifyContent:'space-between'}}>
        <Box>
          <Typography sx={{fontSize:'15px',color:'#7e818c' }}>
            Refund Details
          </Typography>
          <Typography sx={{fontSize:'15px',color:'#282c3f', fontWeight:'700'}}>
            Rs.0
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={onCancelConfirm}
        >
          <Typography sx={{ marginRight: 'auto',  fontWeight:'700' }}> {/* Pushes the text to the left */}
            Cancel
          </Typography>
          <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default OrderCancelReason