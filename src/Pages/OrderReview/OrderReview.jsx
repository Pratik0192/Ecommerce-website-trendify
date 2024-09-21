import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../Components/Checkout/CheckoutSteps/CheckoutSteps";
import OrderSummary from "../../Components/Checkout/OrderSummary/OrderSummary";
import { 
  FormControl, 
  FormControlLabel, 
  IconButton, 
  Radio, 
  RadioGroup,
  Typography,
  Box
} from "@mui/material";
import { useSelector } from "react-redux";



const ConfirmOrder = (props) => {
  const { hideNavbar } = props;
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.data);

  const shippingInfo = {
    address: "Rushikulya-206, Godrej Prakriti, Sukchar, North 24 Paraganas",
    city: "Kolkata",
    state: "West Bengal",
    pinCode: 700115,
    country: "India"
  };
  const [address, setAddress] = useState("");
  const [subtotal, setSubTotal] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    hideNavbar()
  }, [hideNavbar]);

  useEffect(() => {
    setShippingCharges(subtotal > 1000 ? 0 : 200);
    setTax(subtotal * 0.18);
    setTotalPrice(subtotal + tax + shippingCharges);

    const addressLine = 
      `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
    setAddress(addressLine);
  }, []);

  const proceedToPayment = () => {
    console.log("Proceed To Payment");
    navigate("/checkout/payment");
  };

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
  }

  const shippingInfosubHeadingStyle = {
    fontSize:'15px',
    color:'#424553'
  }

  return (
    <Fragment>
      <CheckoutSteps activeStep={1} />
      <Box 
        sx={{ 
          width: "76%",
          margin: "auto",
          marginTop: "30px"
        }} 
        display="flex" 
        justifyContent="space-between" 
        flexWrap="wrap"
      >
        {/* Shipping Info Section */}
        <Box width="70%" sx={{marginRight:'5px'}}>
          <Typography 
            sx={{
              fontSize:'15px',
              color:'#535766',
              fontWeight:'700',
              textTransform:'uppercase',
              marginBottom:'15px'
            }}
          >
            Shipping Info
          </Typography>
          <Box display="flex" sx={{ border: "1px solid #ddd", borderRadius: "5px", padding: "22px"}}>
            <Box sx={{ marginRight:'10px', width: "70%" }}>
              <Box>
                <Typography 
                  sx={{
                    fontSize:'15px',
                    color:'#ff3f6c',
                    fontWeight:'700',
                    textTransform:'uppercase',
                  }}
                >
                  Arriving within 2 days
                </Typography>
                <Typography sx={{fontSize:'12px', color:'#565959'}}>
                  If you order in the next 19 hours and 11 minutes ( Details )
                </Typography>
                <Typography sx={{marginTop:'-3px', fontSize:'12px', marginBottom:'5px', color:'#565959'}}>
                  Items dispatched by Trendify
                </Typography>
                <Box display="flex" marginTop={2}>
                  <Typography sx={shippingInfosubHeadingStyle} >Name:</Typography>
                  <Typography sx={shippingInfosubHeadingStyle}>Swetabja Hazra</Typography>
                </Box>

                <Box display="flex" marginTop={0.5}>
                  <Typography sx={shippingInfosubHeadingStyle}>Phone:</Typography>
                  <Typography sx={shippingInfosubHeadingStyle}>6290772206</Typography>
                </Box>

                <Box display="flex" marginTop={0.5}>
                  <Typography sx={shippingInfosubHeadingStyle}>Address:</Typography>
                  <Typography sx={shippingInfosubHeadingStyle}>{address}</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography sx={{fontSize:'15px', color:'#424553', marginBottom:'8px', fontWeight:'700'}}>
                Choose a Delivery Option
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup aria-label="delivery-options" defaultValue="sunday">
                  <FormControlLabel
                    value="sunday"
                    control={
                      <Radio 
                        sx={{
                          marginTop:'-20px',
                          color:'#ff3f6c',
                          "&.Mui-checked": {
                            color: "#ff3f6c",
                          },
                          '& .MuiSvgIcon-root':{
                            fontSize:'22px'
                          }
                        }}
                      />
                    }
                    label={
                      <Box>
                        <Typography sx={{fontSize:'15px', fontWeight:'700', color:'#ff3f6c'}}>Sunday, 15th Sep</Typography>
                        <Typography sx={{fontSize:'13px', color:'#686b79'}}>
                          Free Delivery
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="tomorrow"
                    control={
                      <Radio
                        sx={{
                          marginTop:'-20px',
                          color:'#ff3f6c',
                          "&.Mui-checked": {
                            color: "#ff3f6c",
                          },
                          '& .MuiSvgIcon-root':{
                            fontSize:'22px'
                          }
                        }}  
                      />
                    }
                    label={
                      <Box>
                        <Typography sx={{fontSize:'15px', fontWeight:'700', color:'#ff3f6c'}}>Tomorrow by 10 AM</Typography>
                        <Typography sx={{fontSize:'13px', color:'#686b79'}}>
                          Free Delivery
                        </Typography>
                      </Box>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          {/* Your Cart Items */}
          <Typography 
            sx={{
              fontSize:'15px',
              color:'#535766',
              fontWeight:'700',
              textTransform:'uppercase', 
              marginTop:'20px',
              marginBottom:'8px'
            }}
          >
            Your Cart Items:
          </Typography>
          {cartItems.map((item) => {
            return (
              <Box
                key={item.productId}
                marginTop={1} 
                marginBottom={2} 
                display="flex" 
                sx={{ border: "1px solid #ddd", borderRadius:'5px', padding:'12px'}}
              >
                <Box sx={{marginRight:'10px'}}>
                  <img src={item.image} alt="" style={{width:'60px'}}/>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: '700', 
                      fontSize: '13px', 
                      color: '#282c3f',
                      marginBottom:'4px'
                    }}
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#282c3f',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginBottom:'4px'
                    }}
                  >
                    {item.name}
                  </Typography>
                  
                  <Box display="flex">
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#282c3f',
                        fontWeight: '700',
                      }}
                    >
                      Rs {item.current_price} X {item.quantity} = 
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#f16565',
                      }}
                    >
                      Rs {item.current_price * item.quantity}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          })}
          
        </Box>

        {/* Price Details*/}
        <Box width="28%" marginTop="36px">
          <OrderSummary linkTo="/checkout/payment" displayButton={true} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default ConfirmOrder;
