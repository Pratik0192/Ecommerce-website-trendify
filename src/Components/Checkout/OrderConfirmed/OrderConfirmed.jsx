import React, { useEffect } from 'react';
import { Box, Grid, Typography, Button, Divider } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { Link } from 'react-router-dom';

import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';

const OrderConfirmed = (props) => {
  const { hideNavbar } = props;

  useEffect(() => {
    hideNavbar();
  }, [hideNavbar]);

  return (
    <div>
      <CheckoutSteps activeStep={2} />
      <Box sx={{ padding: '40px', textAlign: 'center' }}>
        {/* Header Section */}
        <Box 
          sx={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            backgroundColor: '#ffffff', 
            padding: '20px', 
            borderRadius: '5px', 
            border:'1px solid #d4d5d9', 
          }}
        >
          <VerifiedIcon sx={{ paddingTop: '30px',fontSize: '70px', color: '#03a685' }} />
          <Typography
            sx={{
              fontSize: "25px",
              paddingBottom: "15px",
              fontWeight: 'bold', 
              color: '#03a685',
            }}
          >
            Order Confirmed
          </Typography>
          <Typography variant="body1" sx={{ color: '#94989f', marginTop: '10px', fontSize:'17px'}}>
            Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.
          </Typography>
        </Box>

        {/* Delivery Details Section */}
        <Box 
          sx={{ 
            maxWidth: '600px',
            margin: '20px auto',
            backgroundColor: '#ffffff', 
            padding: '20px', 
            borderRadius: '5px', 
            border:'1px solid #d4d5d9',
            textAlign: 'left'
          }}
        >
          <Typography variant="h7" sx={{ color: '#535665' }}>
            Delivering to:
          </Typography>
          <Typography variant="h6" sx={{ color: '#535665',fontSize:'15px' }}>
            <strong>Sayantan Sardar</strong> | 8207208709
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '0' ,color:'#888'}}>
            South Kanchadaha, Madrasha More, Kolkata,north 24 pgs , West Bengal - 743427
          </Typography>
          <Button variant="outlined" color="secondary" 
            sx={{
              textTransform: 'upperCase', 
              fontWeight:'bold', 
              margin: '10px 0',
              color:'rgb(255, 63, 108)'
            }}
          >
            Order Details 
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: '15px', color: 'rgb(255, 63, 108)' }} />
          </Button>
          <Divider sx={{marginBottom:'12px', marginTop:'5px'}}/>
          <Typography variant="caption" display="block" sx={{ color: '#888' }}>
              <ModeOutlinedIcon sx={{ fontSize: '15px', color: '#888', marginRight: "10px" }} />
              You can track/View/Modify your order from the orders page.
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Grid 
          container
          justifyContent="center"
          spacing={2}
          sx={{
            margin: "auto",
            marginTop: "-10px",
            marginBottom: "100px",
            maxWidth: "650px"
          }}>
          <Grid item xs={6} sx={{ marginLeft: "-18px" }}>
            <Link to="/">
              <Button
                disableRipple
                disableElevation
                variant="contained" 
                fullWidth
                sx={{
                  backgroundColor: 'white', 
                  color: '#333', 
                  fontWeight:'bold',
                  fontSize:'16px', 
                  textTransform: 'upperCase', 
                  marginLeft:'0px',
                  border:'1px solid #d4d5d9',
                  height:'60px',    
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button 
              variant="contained"
              fullWidth
              disableRipple
              disableElevation
              sx={{
                backgroundColor: '#ff3f6c',
                fontWeight:'bold',
                fontSize:'16px', 
                color: '#ffffff', 
                textTransform: 'upperCase',
                marginRight:'-5px',
                height:'60px',
                "&:hover": {
                  backgroundColor: "#ff3f6c",
                },
              }}
            >
              View Order
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OrderConfirmed;
