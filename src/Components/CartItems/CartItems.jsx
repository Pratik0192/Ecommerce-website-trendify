import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, IconButton, Divider, colors, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { BorderColor, CheckBox, Undo } from '@mui/icons-material';
import expressicon from '../Assets/express.png';
import emptycart from '../Assets/emptyCartIcon.png';
import { Close } from '@mui/icons-material';

const CartItems = () => {
  const { getTotalCartAmount, addToCart, all_product, cartItems, removeCart, getTotalCartItems } = useContext(ShopContext);

  const spanStyle = {
    fontWeight: '700',
    fontSize: '14px',
    color: '#282c3f',
    background: '#f5f5f5',
    padding: '2px 8px',
    marginRight: '12px'
  };

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

  const quantityButtonstyle = { 
    minWidth:'30px',
    maxWidth:'30px',
    minHeight:'20px',
    maxHeight:'20px',
    background: '#f5f5f5',
    borderRadius:'0',
    marginTop:'-2px',
    color:'#282c3f',
    '&:hover': {background: '#f5f5f5',}
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

  if (getTotalCartItems() === 0) {
    return (
      <Box textAlign="center" mt={15} mb={28}>
        <img src={emptycart} style={{width: '250px'}} />
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
          {all_product.map((e) => {
            const quantity = cartItems[e.id] || 0;
            if (quantity > 0) {
              totalDiscount += (e.old_price - e.new_price) * quantity;
              return (
                <Card key={e.id} variant="outlined" sx={{ mb: 2 }}>
                  <Box sx={{ position: 'relative' }}>
                    <IconButton
                      onClick={() => removeCart(e.id)}
                      size="small"
                      aria-label="remove"
                      sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                      <Close sx={{color:'#282c3f'}} />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={2.5} mr={2}>
                        <img src={e.image} alt="" style={{ width: '135px', height: '175px'}} />
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{fontWeight: '700', fontSize: '13px', color: '#282c3f', marginBottom: '4px'}}
                        >
                          Roadster
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#282c3f',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            marginBottom: '4px'
                          }}
                        >
                          {e.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '12px',
                            color: '#94969f',
                            marginBottom: '8px'
                          }}
                        >Sold by: Flashstar Commerce</Typography>
                        <Typography>
                          <span style={spanStyle}>
                            Size: 39
                          </span>
                          <span style={{marginLeft:'-3px', marginRight:'-8px'}}>
                            <Button 
                              variant='text' 
                              sx={quantityButtonstyle} >+</Button>
                          </span>
                          <span style={spanStyle}>
                            Qty: {quantity}                         
                          </span>
                          <span style={{marginLeft:'-20px', marginRight:'10px'}}>
                            <Button 
                              variant='text'
                              sx={quantityButtonstyle}
                            >
                              -
                            </Button>
                          </span>
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: '700',
                              color: '#ff5722',
                              border: '1px solid #ff5722',
                              padding: '5px 4px 2px 4px',
                              borderRadius: '2px'
                            }}
                          >7 Left</span>
                        </Typography>
                        <Typography style={{ marginTop: '12px', marginBottom: '8px' }}>
                          <span
                            style={{
                              fontSize: '14px',
                              color: '#282c3f',
                              fontWeight: '700',
                              marginRight: '8px'
                            }}
                          >Rs.{e.new_price * quantity}</span>
                          <span
                            style={{
                              fontSize: '14px',
                              color: '#94969f',
                              textDecoration: 'line-through',
                              marginRight: '8px'
                            }}
                          >Rs.{e.old_price * quantity}</span>
                          <span
                            style={{
                              fontSize: '14px',
                              color: '#f16565',
                            }}
                          >45% OFF</span>
                        </Typography>
                        <Typography style={{ marginBottom: '8px' }}>
                          <span>
                            <Undo
                              sx={{ marginBottom: '-8px' }}
                            />
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#282c3f',
                              fontWeight: '700',
                              marginRight: '3px'
                            }}
                          >14 days</span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#282c3f'
                            }}
                          >return available</span>
                        </Typography>
                        <Typography>
                          <span>
                            <img src={expressicon} alt="" style={{ width: '55px', marginBottom: '-4px' }} />
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#282c3f',
                              marginRight: '3px'
                            }}
                          >
                            Delivery by
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#03a685',
                              fontWeight: '700'
                            }}
                          >
                            tomorrow
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              );
            }
            return null;
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
                PRICE DETAILS ({getTotalCartItems()})
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
  );
}

export default CartItems;
