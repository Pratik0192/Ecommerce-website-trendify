import React, { useContext, useEffect } from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, IconButton, Divider, colors, Checkbox, useScrollTrigger } from '@mui/material';
import { Undo } from '@mui/icons-material';
import expressicon from '../Assets/express.png';
import { Close } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const CartItems = (props) => {
  const{ cartItem } = props;
  const dispatch = useDispatch();

  const spanStyle = {
    fontWeight: '700',
    fontSize: '14px',
    color: '#282c3f',
    background: '#f5f5f5',
    padding: '2px 8px',
    marginRight: '12px'
  };

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

  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart(cartItem._id))
  }

  const handleIncrementCartItemQuantity = () => {
    dispatch(cartActions.incrementCartItemQuantity(cartItem._id));
  }

  const handleDecrementCartItemQuantity = () => {
    dispatch(cartActions.decrementCartItemQuantity(cartItem._id));
  }

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handleRemoveFromCart}
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
            <img src={cartItem.image} alt="" style={{ width: '135px', height: '175px'}} />
          </Grid>
          <Grid item xs={9}>
            <Typography
              sx={{fontWeight: '700', fontSize: '13px', color: '#282c3f', marginBottom: '4px'}}
            >
              {cartItem.company}
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
              {cartItem.name}
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
                  sx={quantityButtonstyle}
                  onClick={handleIncrementCartItemQuantity}
                >
                  +
                </Button>
              </span>
              <span style={spanStyle}>
                Qty: {cartItem.quantity}                         
              </span>
              <span style={{marginLeft:'-20px', marginRight:'10px'}}>
                <Button 
                  variant='text'
                  sx={quantityButtonstyle}
                  onClick={handleDecrementCartItemQuantity}
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
              >Rs.{cartItem.current_price * cartItem.quantity}</span>
              <span
                style={{
                  fontSize: '14px',
                  color: '#94969f',
                  textDecoration: 'line-through',
                  marginRight: '8px'
                }}
              >Rs.{cartItem.original_price * cartItem.quantity}</span>
              <span
                style={{
                  fontSize: '14px',
                  color: '#f16565',
                }}
              >{cartItem.discount_percentage}% OFF</span>
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

export default CartItems;
