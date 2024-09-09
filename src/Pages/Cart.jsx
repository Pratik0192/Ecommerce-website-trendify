import React, { useContext, useEffect } from 'react'
import CartItem from '../Components/CartItems/CartItem';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, IconButton, Divider, colors, Checkbox, useScrollTrigger } from '@mui/material';
//import { Undo, Close } from '@mui/icons-material';
//import expressicon from '../Components/Assets/express.png';
import emptycart from '../Components/Assets/emptyCartIcon.png';
import { useSelector } from 'react-redux';

const Cart = () =>{
  const { getTotalCartAmount } = useContext(ShopContext);

  // Fetch the Cart from Redux Store
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    console.log('Cart: ', cart);
  }, [cart]);

  const priceStyle = {
    fontSize: '14px',
    color: '#282c3f'
  };

  const styleKnowMore = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#ff3f6c',
    marginLeft: '8px'
  };

  const styleFree = {
    fontSize: '14px',
    color: '#03a685'
  };

  const totalAmountStyle = {
    color:'#3e4152',
    fontSize:'15px',
    fontWeight:'700'
  }

  const buttonStyle = {
    width:'100%',
    padding:'10px 16px',
    fontSize:'14px',
    fontWeight:'700',
    borderRadius:'2px',
    backgroundColor: 'rgb(255, 63, 108)',
    color:'#ffffff',
    cursor: 'pointer'
  }

  const donationButtonStyle = {
    border:'1px solid #d4d5d9',
    color:'#282c3f',
    borderRadius:'40px',
    fontWeight:'700',
    padding:'8px 16px',
    '&:hover': {border:'1px solid #ff3f6c', color:'#ff3f6c', background:'transparent'}
  }

  const emptyCartButtonStyle = {
    border:'1px solid #ff3f6c',
    color:'#ff3f6c',
    fontWeight:'700',
    padding:'8px 16px',
    borderRadius:'2px',
    '&:hover': {border:'1px solid #ff3f6c', color:'#ff3f6c', background:'transparent'}
  }

  let totalDiscount = 0;

  if (cart.length === 0) {
    return (
      <Box textAlign="center" mt={15} mb={28}>
        <img src={emptycart} style={{width: '250px'}} alt="empty-cart-image"/>
        <Typography sx={{ fontWeight: '700', color: '#282c3f', fontSize:'20px', marginBottom:'2px' }}>
          Hey, it feels so light!
        </Typography>
        <Typography  sx={{fontSize:'14px', color:'#7e818c', marginBottom:'25px'}}>
          There is nothing in your bag. Let's add some items
        </Typography>
        <Link to="/wishlist">
          <Button variant="outlined" sx={emptyCartButtonStyle}>
            Add items from wishlist
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box p={2} className='cartitems'>
      <Grid container spacing={2}>
        <Grid item xs={11} md={7}>
          {cart.map((item) => {
            let quantity = 1;
            totalDiscount += (item.original_price - item.current_price) * quantity;
            return (
              <CartItem
                key={item._id}
                cartItem={item}
                quantity={quantity}
              />
            );
          })}
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                style={{
                  fontSize:'12px',
                  fontWeight:'700',
                  color:'#535766',
                  marginTop:'12px',
                  marginBottom:'20px'
                }}
              >
                SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
              </Typography>
              <Box display="flex" alignItems="center" paddingBottom="5px">
                <Checkbox sx={{marginLeft:'-10px', color:'#282c3f', '&.Mui-checked':{color:'#ff3f6c'},}}/>
                <Typography
                  style={{
                    fontSize:'14px',
                    fontWeight:'700',
                    color:'#282c3f'
                  }}
                >
                  Donate and make a difference
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" paddingTop="10px" paddingBottom="16px">
                <Button variant='outlined' sx={donationButtonStyle}>Rs.10</Button>
                <Button variant='outlined' sx={donationButtonStyle}>Rs.20</Button>
                <Button variant='outlined' sx={donationButtonStyle}>Rs.50</Button>
                <Button variant='outlined' sx={donationButtonStyle}>Rs.100</Button>
              </Box>
              <Typography 
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#ff3f6c',
                }}
              >
                Know more
              </Typography>
              <Divider sx={{marginTop:'18px', marginBottom:'18px'}} />
              <Typography
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#535766',
                  marginBottom: '16px'
                }}
              >
                PRICE DETAILS ({cart.length})
              </Typography>
              <Box display="flex" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                <Typography style={priceStyle}>Total MRP</Typography>
                <Typography style={priceStyle}>Rs.{getTotalCartAmount()}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                <Typography style={priceStyle}>Discount on MRP</Typography>
                <Typography style={styleFree}>-Rs.{totalDiscount}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                <Typography style={priceStyle}>Coupon Discount</Typography>
                <Typography style={{ color: '#ff3f6c', fontSize: '14px' }}>Apply Coupon</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                <Typography>
                  <span style={priceStyle}>
                    Platform Fee
                  </span>
                  <span style={styleKnowMore}>
                    Know More
                  </span>
                </Typography>
                <Typography style={styleFree}>Free</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>
                  <span style={priceStyle}>
                    Shipping Fee
                  </span>
                  <span style={styleKnowMore}>
                    Know More
                  </span>
                </Typography>
                <Typography style={styleFree}>Free</Typography>
              </Box>
              <Typography style={{fontSize:'12px', color:'#686b79', marginTop:'-3px'}}>Free Shipping for you</Typography>
              <Divider sx={{margin: '10px 0 10px 0'}}/>
              <Box display="flex" justifyContent="space-between">
                <Typography style={totalAmountStyle}>Total Amount</Typography>
                <Typography style={totalAmountStyle}>Rs.{getTotalCartAmount()}</Typography>
              </Box>
              <Box mt={3}>
                <Link to="/checkout/shipping">
                  <Button variant="contained" style={buttonStyle}>PLACE ORDER</Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cart