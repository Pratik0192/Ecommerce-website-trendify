import React, { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, TextField,
  Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, IconButton,
  Grid, Card, CardContent
} from '@mui/material';
import {Link} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import OrdersIcon from '@mui/icons-material/Inventory2Outlined'; // Example icon for Orders
import WishlistIcon from '@mui/icons-material/FavoriteBorder'; // Example icon for Collections & Wishlist
import CreditIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import Placeholder from '../Assets/profile_placeholder.png';

const OverviewComponent = () => {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

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

  const cardStyle = {
    height: '180px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: "#D3D3D3",
      cursor: 'pointer'
    }
  }


  return (
    <Box sx={{ padding: '20px' }}>
      {/* Profile Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '20px',
          marginBottom: '30px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Placeholder} alt="Placeholder" height="150px" style={{margin:"10px"}}/>
          {/* <Typography variant="h6" sx={{ fontWeight: '500' }}>
            Trendify User
          </Typography> */}
        </Box>
      </Box>

       {/* Orders, Wishlist,Trendify Credit Section */}
       <Grid container spacing={3}>
        {/* Orders */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <OrdersIcon sx={{ fontSize: '42px', marginBottom: '10px' }} />
                <Typography variant="h6">Orders</Typography>
                <Typography sx={{ color: '#666', fontSize: '12px'}}>
                  Check your order status
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Collections & Wishlist */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <WishlistIcon sx={{ fontSize: '42px', marginBottom: '10px' }} />
                <Typography variant="h6">Wishlist</Typography>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>
                  All your curated product collections
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Trendify Credit */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CreditIcon sx={{ fontSize: '42px', marginBottom: '10px' }} />
                <Typography variant="h6">Trendify Credit</Typography>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>
                  Manage all your refunds & gift cards
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* TrenCash */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <RedeemIcon sx={{ fontSize: '42px', marginBottom: '10px' }} />
                <Typography variant="h6">TrenCash</Typography>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>
                  Earn TrenCash as you shop
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Addresses */}
        <Grid item xs={12} sm={4}> 
          <Card variant="outlined" sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <LocationOnIcon sx={{ fontSize: '42px', marginBottom: '10px' }} />
                <Typography variant="h6">Addresses</Typography>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>
                  Save addresses for a hassle-free checkout
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <PersonIcon sx={{ fontSize: '42px', marginBottom: '10px' }} />
                <Typography variant="h6">Profile Details</Typography>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>
                  Change your profile details
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>  
                
      <Button
        variant="contained"
        disableRipple
        sx={{
          backgroundColor: "#ff3f6c",
          color: "#fff",
          marginTop: "40px",
          padding: "12px 60px",
          fontSize: "16px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#ff3f6c",
            boxShadow: "none",
          },
        }}
      >
        LOG OUT
      </Button>
    </Box>
  );
};

export default OverviewComponent;