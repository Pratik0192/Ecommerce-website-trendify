import React from 'react'
import { Typography, Box } from "@mui/material";


const priceDetailStyle = {
    fontSize:'12px',
    color:'#535766',
    fontWeight:'700',
    textTransform:'uppercase'
  }

  const priceSubHeadings = {
    fontSize:'14px',
    color:'#424553',
  }

  const styleFree = {
    fontSize:'14px',
    color:'#03a685'
  }

  const totalStyle = {
    fontSize:'15px',
    color:'#3e4152',
    fontWeight:'700'
  }

  const knowmoreStyle = {
    fontSize:'14px',
    color:'#ff3f6c',
    fontWeight:'700',
    marginLeft:'-112px'
  }

const ShippingAmount = () => {
  return (
    <div>
        <Box sx={{ padding: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
          <Typography  sx={priceDetailStyle}>
            PRICE DETAILS (1 Item)
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Typography sx={priceSubHeadings} >Total MRP</Typography>
            <Typography sx={{color:'#424553', fontSize:'14px'}} >₹899</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Typography sx={priceSubHeadings} >Discount on MRP</Typography>
            <Typography sx={{color:'#03a685', fontSize:'14px'}} >
              -₹495
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Typography sx={priceSubHeadings} >Platform Fee</Typography>
            <Typography sx={knowmoreStyle}>Know More</Typography>
            <Typography sx={styleFree}>
              FREE
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Typography sx={priceSubHeadings} >Shipping Fee</Typography>
            <Typography sx={knowmoreStyle}>Know More</Typography>
            <Typography sx={styleFree}>
              FREE
            </Typography>
          </Box>
          <Typography sx={{fontSize:'12px', color:'#686b79'}}>Free shipping for you</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
              borderTop: "1px solid #eaeaec",
              paddingTop: 2,
            }}
          >
            <Typography  sx={totalStyle}>
              Total Amount
            </Typography>
            <Typography  sx={totalStyle}>
              ₹404
            </Typography>
          </Box>
        </Box>
    </div>
  )
}

export default ShippingAmount