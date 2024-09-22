import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Divider,Link, Stack,Card,CardContent} from '@mui/material';
import image1 from '../Assets/product_2.png';
import image2 from '../Assets/product_3.png';
import image3 from '../Assets/product_8.png';
import image4 from '../Assets/nullpicture.jpg';

import { ThemeProvider, createTheme } from "@mui/material/styles";

import LockResetIcon from '@mui/icons-material/LockReset';

const orders = [
  {
    orderPlaced: '21 June 2024',
    total: '₹599.00',
    shippedTo: 'Sayantan sardar',
    orderNumber: '408-8465956-2312333',
    deliveryDate: 'Delivered 23 June',
    products: [
      {
        productTitle: 'The Souled Store Official Money Heist: Master Mind Berlin',
        returnWindow: 'Return window closed on 4 July 2024',
        productImage: "https://res.cloudinary.com/dpkktgrqj/image/upload/v1726777227/products/Velvet_Finish_Embroidered_Thread_Work_Kurta_with_Trousers_qwpgn9.jpg", 
      },
    ],
  },
  {
    orderPlaced: '20 June 2024',
    total: '₹2,436.00', 
    shippedTo: 'Pratik Chakraborty',
    orderNumber: '408-2142465-0473104',
    deliveryDate: 'Delivered 21 June',
    products: [
      {
        productTitle: 'Ant Esports MK1400 Pro  Wired Double Injection Key Caps - Black',
        returnWindow: 'Return and replacement windows have closed',
        productImage: "https://res.cloudinary.com/dpkktgrqj/image/upload/v1725217184/products/Men_Polo_Collar_Slim_Fit_T-shirt_ohh37v.jpg", 
      },
      {
        productTitle: 'Ant Esports GM320 RGB Optical Wired Gaming Mouse Ergonomic- Black',
        returnWindow: 'Return and replacement windows have closed',
        productImage: "https://res.cloudinary.com/dpkktgrqj/image/upload/v1725536789/products/Yellow_Green_Floral_Printed_Cambric_Pleated_Kurti_qykgos.jpg", 
      },
    ],
  },
];

const theme = createTheme({
  typography: {
    allVariants: {
      // textTransform: 'none',
      // fontSize: 14,
      zoom: 1.1
    }
  },
});

const buttonStyle = {
  textTransform: 'uppercase', 
  borderRadius:'13px',
  fontWeight:'bold',
  marginTop: '10px ', 
  fontSize: '10px',
}

const buttonStackStyle = {
  height: "27px",
  borderColor: '#535665',
  textTransform: 'none',
  color: '#333',
  fontWeight: 'bold',
  fontSize: '11px',
  paddingTop:'5px',
  borderRadius:'14px',
  "&:hover": {
    backgroundColor: "white",
    borderColor:'#535665'
  }
}

const cardHeaderTextTop = {
  fontWeight: 'bold', 
  color: '#535665',
  fontSize:'10px'
}

const cardHeaderTextBottom = {
  ontWeight: 'bold', 
  color: '#535665',
  fontSize:'10px',
  marginTop: '-5px',
  marginBottom: '5px',
}


const OrderAndReturn = ({onTrackPackage}) => {

  return (
    <ThemeProvider theme={theme}> 
    <Box sx={{ padding: '20px', width: "100%"}}>
      {orders.map((order, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid #d4d5d9',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#ffffff',
          }}
        >
          {/* Order Info */}
          <Grid
            container 
            sx={{
              borderBottom: "1px solid #ddd", 
              marginTop: "-13px", 
              marginBottom:"10px", 
              paddingBottom:'4px',
              paddingTop:'3px',
            }}
          >
            <Grid item xs={9} container>
              <Grid item xs={3}>
                <Typography variant='caption'> 
                  <Typography variant="caption" sx={cardHeaderTextTop}>
                    ORDER PLACED:
                  </Typography> 
                  <Typography sx={cardHeaderTextBottom}>
                    {order.orderPlaced}
                  </Typography>
                </Typography>
              </Grid >
              <Grid item xs={2}>
                <Typography variant="caption" sx={cardHeaderTextTop}>
                  TOTAL:
                </Typography>
                <Typography sx={cardHeaderTextBottom}>
                  {order.total}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="caption" sx={cardHeaderTextTop}>
                  SHIP TO: 
                </Typography>
                <Typography sx={cardHeaderTextBottom} >
                  <Link href="#" underline="none">{order.shippedTo}</Link>
                </Typography>
              </Grid>
            </Grid>

            {/* Order ID and Links */}
            <Grid item xs={3}>
              <Typography variant="caption" sx={cardHeaderTextTop}>
                ORDER # {order.orderNumber}
              </Typography>
              <Typography sx={cardHeaderTextBottom} >
                <Link href="#" underline="none">View order details </Link>
                  <span style={{marginLeft:'15px'}}>
                    <Link href="#" underline="none">Invoice </Link>
                  </span>
              </Typography>
            </Grid>
          </Grid>
          {/* Product Info */}
          <Box sx={{ marginTop: '0px', marginBottom: '0px' }}>
            {order.products.map((product, productIndex) => (
              <Grid container spacing={1} key={productIndex}
                sx={{ margin: "20px 0 35px 0"}}
              >
                <Grid item container xs={8.5}>
                  <Grid item xs={2.4} 
                    sx={{ 
                      padding: "0 8px 0 0",
                      height: "130px",
                      marginTop:'-8px',
                      marginLeft:'-8px'
                    }}
                  >
                    <img
                      src={product.productImage ? product.productImage : image4}
                      alt="Product"
                      width="100%"
                      style={{ borderRadius:'2px',boxShadow:'1px solid #333', maxHeight:'150px' }}
                    />
                  </Grid>
                  <Grid item xs={9.6} sx={{ marginTop: "-15px"}}>
                    <Typography variant="subtitle1" 
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: '15px', 
                        color: '#535665',
                        // marginRight:'-10px'
                      }}
                    >
                      {order.deliveryDate}
                    </Typography>
                    <Typography sx={{fontSize:'12px',color: '#03a685', marginTop:'-6px', paddingBottom:'3px'}}>
                       Package was handed to resident
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888',fontSize: '12px', marginTop: "5px"}}>
                      {product.productTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888',fontSize: '10px' }}>
                      {product.returnWindow}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      disableRipple
                      disableElevation
                      size="small"
                      sx={{ 
                        backgroundColor:'#ff3f6c',
                        "&:hover": {
                          backgroundColor: "#ff3f6c",
                        },
                        ...buttonStyle
                       }}
                    >
                      <LockResetIcon sx={{ fontSize: '15px', paddingRight:'4px', paddingLeft:'0px' }} />Buy it again
                    </Button>
                    <Button
                      variant="outlined"
                      disableRipple
                      disableElevation
                      size="small"
                      sx={{ 
                        borderColor: '#535665', 
                        marginLeft: '10px', 
                        color:'#333',  
                        "&:hover": {
                          backgroundColor: "white",
                          borderColor: "#535665",
                        },
                        ...buttonStyle
                      }}
                    >
                      View your item
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={3.5} sx={{ marginTop: "-12px", marginRight:'-5px'}}>
                  <Stack spacing={1} sx={{ width: '175px', margin: 'auto', }}>
                    <Button 
                      variant ="outlined" 
                      disableRipple  
                      disableElevation 
                      sx={buttonStackStyle}
                      onClick={onTrackPackage}  
                    >
                     Track package
                    </Button>
                    <Button variant="outlined"disableRipple disableElevation sx={buttonStackStyle}>
                      Leave seller feedback
                    </Button>
                    <Button variant="outlined" disableRipple disableElevation sx={buttonStackStyle}>
                      Write a product review
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Box>

          {/* Divider */}
          <Divider sx={{ marginY: '10px' }} />
        </Box>
      ))}

    </Box>
  </ThemeProvider>
  );
};

export default OrderAndReturn;
