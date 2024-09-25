import React, { useEffect } from 'react'
import CartItem from '../../Components/CartItems/CartItem';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Divider, 
  Checkbox,
  Backdrop,
  CircularProgress
} from '@mui/material';
//import { Undo, Close } from '@mui/icons-material';
//import expressicon from '../Components/Assets/express.png';
import emptycart from '../../Components/Assets/empty-cart.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';


const Cart = (props) =>{
  // Fetch the Cart from Redux Store
  const { showNavbar } = props;
  const cart = useSelector((store) => store.cart.data);
  const loading = useSelector((store) => store.cart.loading);
  const priceDetails = useSelector((store) => store.cart.priceDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log('Cart: ', cart);
    showNavbar();
  }, [showNavbar]);

  useEffect(() => {
    dispatch(cartActions.calculateTotalPrice());
  }, [cart, dispatch]);

  const priceStyle = {
    fontSize: '14px',
    color: '#282c3f',
    marginRight:'8px'
  };

  const styleKnowMore = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#ff3f6c',
    cursor:'pointer'
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
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box p={2} className='cartitems'>
        <Grid container spacing={2}>
          <Grid item xs={11} md={7}>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.productId}
                  cartItem={item}
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
                  style={styleKnowMore}
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
                  <Typography style={priceStyle}>Rs.{priceDetails.totalMrp}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                  <Typography style={priceStyle}>Discount on MRP</Typography>
                  <Typography style={styleFree}>-Rs.{priceDetails.totalDiscount}</Typography>
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
                  <Typography style={totalAmountStyle}>Rs.{priceDetails.totalAmount}</Typography>
                </Box>
                <Box mt={3}>
                  <Link to="/checkout/address">
                    <Button variant="contained" style={buttonStyle}>
                      PLACE ORDER
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Cart