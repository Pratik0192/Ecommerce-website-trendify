import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const Services = () => {
  
  const outerBox = { 
    width:'20%', 
    display:'flex', 
    justifyContent:'center',
    padding:'35px 0px'
  }

  const iconStyle = {
    marginRight:'10px',
    fontSize:'36px'
  }

  const smallText = {
    fontSize:'12px',
    color:'#696b79'
  }

  const mainText = {
    fontSize:'16px',
    color:'#282c3f',
    fontWeight:'500'
  }

  return (
    <Grid xs={12} md={12} sx={{marginTop:'80px', padding:'0px 90px'}}>
      <Grid xs={12} md={8} sx={{background:'#f2f2f3', display:'flex'}}>
        <Box sx={outerBox}>
          <LocalShippingOutlinedIcon sx={iconStyle}/>
          <Box>
            <Typography sx={mainText}>
              Free Shipping
            </Typography>
            <Typography sx={smallText}>
              Free Delivery Over Rs.1000
            </Typography>
          </Box>
        </Box>
        <Box sx={outerBox}>
          <CardGiftcardOutlinedIcon sx={iconStyle}/>
          <Box>
            <Typography sx={mainText}>
              Daily Surprise Offers
            </Typography>
            <Typography sx={smallText}>
              Up to 50% OFF
            </Typography>
          </Box>
        </Box>
        <Box sx={outerBox}>
          <HeadsetMicOutlinedIcon sx={iconStyle}/>
          <Box>
            <Typography sx={mainText}>
              Support 24/7
            </Typography>
            <Typography sx={smallText}>
              Shop with an expert
            </Typography>
          </Box>
        </Box>
        <Box sx={outerBox}>
          <DiscountOutlinedIcon sx={iconStyle}/>
          <Box>
            <Typography sx={mainText}>
              Affordable Prices
            </Typography>
            <Typography sx={smallText}>
              Get factory direct price
            </Typography>
          </Box>
        </Box>
        <Box sx={outerBox}>
          <PaymentsOutlinedIcon sx={iconStyle}/>
          <Box>
            <Typography sx={mainText}>
              Secure Payment
            </Typography>
            <Typography sx={smallText}>
              100% protected payments
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Services