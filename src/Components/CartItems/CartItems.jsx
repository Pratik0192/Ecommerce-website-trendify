import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Undo } from '@mui/icons-material';
import expressicon from '../Assets/express.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeCart } = useContext(ShopContext);

  const spanStyle = {
    border:'1px solid black',
    fontSize:'14px',
    color:'#282c3f',
    background:'#f5f5f5',
    padding: '2px 8px'
  }

  return (
    <Box p={2} className='cartitems'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {all_product.map((e) => {
            const quantity = cartItems[e.id] || 0;
              if(quantity > 0){
                return(
                  <Card key={e.id} variant="outlined" sx={{ mb: 2 }}>
                    <Box sx={{position:'relative'}} >
                      <IconButton
                        onClick={() => removeCart(e.id)}
                        size="small" 
                        aria-label="remove"
                        sx={{position: 'absolute', top: 8, right:8}}  
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={3}>
                          <img src={e.image} alt="" style={{ width: '111px', height:'144px' }} />
                        </Grid>
                        <Grid item xs={9}>
                          <Typography
                            sx={{
                              fontWeight:'700',
                              fontSize:'13px',
                              color:'#282c3f'
                            }}
                          >
                            Roadster
                          </Typography>
                          <Typography
                            sx={{
                              fontSize:'14px',
                              color:'#282c3f'
                            }}
                          >
                            {e.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize:'12px',
                              color:'#94969f'
                            }}
                          >Sold by: Flashstar Commerce</Typography>
                          <Typography>
                            <span style={spanStyle}>
                              Size: 39
                            </span>
                            <span style={spanStyle} >Qty: {quantity}</span>
                            <span
                              style={{
                                fontSize:'10px',
                                fontWeight:'700',
                                color:'#ff5722',
                                border: '1px solid #ff5722',
                                padding: '1px 4px',
                                borderRadius:'2px'
                              }}
                            >7 Left</span>
                          </Typography>
                          <Typography>
                            <span
                              style={{
                                fontSize:'14px',
                                color:'#282c3f',
                                fontWeight:'700'
                              }}
                            >Rs.{e.new_price * quantity}</span>
                            <span
                              style={{
                                fontSize:'14px',
                                color:'#94969f',
                                textDecoration:'line-through'
                              }}
                            >Rs.{e.old_price * quantity}</span>
                            <span
                              style={{
                                fontSize:'14px',
                                color:'#f16565',
                              }}
                            >45% OFF</span>
                          </Typography>
                          <Typography>
                            <span>
                              <Undo/>
                            </span>
                            <span
                              style={{
                                fontSize:'12px',
                                color:'#282c3f',
                                fontWeight:'700'
                              }}
                            >14 days</span>
                            <span
                              style={{
                                fontSize:'12px',
                                color:'#282c3f',
                              }}
                            >return available</span>
                          </Typography>
                          <Typography>
                            <span>
                              <img src={expressicon} alt="" width={55} />
                            </span>
                            <span
                              style={{
                                fontSize:'12px',
                                color:'#282c3f'
                              }}
                            >
                                Delivery by
                            </span>
                            <span
                              style={{
                                fontSize:'12px',
                                color:'#03a685',
                                fontWeight:'700'
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
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>PRICE DETAILS</Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">Total MRP</Typography>
                <Typography variant="body1">Rs.{getTotalCartAmount()}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body1">Shipping Fee</Typography>
                <Typography variant="body1">Free</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="h6">Total Amount</Typography>
                <Typography variant="h6">Rs.{getTotalCartAmount()}</Typography>
              </Box>
              <Box mt={3}>
                <Link to="/checkout/shipping">
                  <Button variant="contained" color="primary" fullWidth>PLACE ORDER</Button>
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
