import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import "./Wishlist.css";
import { Button, Card, CardContent, Divider, Typography } from '@mui/material';
import { CancelOutlined, Padding, Star } from '@mui/icons-material';
import wishlist_icon from '../Assets/wishlist.png';
import Navbar from '../Navbar/Navbar';

const Wishlist = (props) => {
  const { addToCart, wishlistItems, removeFromWishlist } = useContext(ShopContext); // Access wishlist items and remove function from context

  const buttonStyle = {
    marginTop:'20px',
    marginBottom:'60%',
    padding:'14px 45px',
    color: '#ff4141', 
    borderColor: '#ff4141',
    fontSize:'16px',
    fontWeight: '600', 
    '&:hover': { borderColor: '#ff4141', color: '#ff4141', fontWeight: '600'}, 
  };

  return (
    <div className="wishlist-page">
      {wishlistItems.length === 0 ? (
        <>
          <Typography style={{marginTop:'120px', fontSize:'20px', fontWeight:'600', color:'#282c3f' }} >
            YOUR WISHLIST IS EMPTY
          </Typography>
          <Typography style={{fontSize:'17px', color:'#94989f', marginTop:'15px' }} >
            Add items that you like to in your wishlist.Review
          </Typography>
          <Typography style={{fontSize:'17px', color:'#94989f' }} >
            them anytime and easily move them to the bag.
          </Typography>
          <img 
            src={wishlist_icon}
            style={{ margin:'30px 0', width: "160px"}}
            alt="" 
          />
          <Link to='/' >
            <Button
              variant='outlined'
              sx={buttonStyle}
            >
              Continue Shopping
            </Button>
          </Link>
        </>
      ) : (
        <div className="wishlist-items">
          <Typography style={{fontSize:'18px', fontWeight:'700', color:'#282c3f', marginLeft:'74px', marginTop:'35px', marginBottom:'40px',width:'100%'}} >
            My Wishlist
          </Typography>
          {wishlistItems.map((item) => (
            <Card key={item._id} className='wishlist-item'>
              <div className="wishlist-img-container">
                <Link to={`/product/${item._id}`}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <CancelOutlined 
                  className="wishlist-remove-icon" 
                  onClick={() => removeFromWishlist(item._id)}
                />
              </div>
              <CardContent>
                <Typography style={{marginTop:'-10px'}}>
                  {item.rating_stars} <Star sx={{color:'#ff4141', marginBottom:'-5px'}} />
                </Typography>
                <div className="wishlist-item-info">
                  <Typography style={{fontSize:'16px', fontWeight:'700', color:'#282c3f', display:'block', marginBottom:'60px'}}>
                    {item.company}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "14px", 
                      marginTop: "-60px", 
                      fontWeight: "400",
                      color: "#535766", 
                      whiteSpace:'nowrap', 
                      overflow:'hidden', 
                      textOverflow:'ellipsis', 
                      maxWidth:'260px', 
                      display:'block'
                    }}
                  >
                    {item.name}
                  </Typography>
                </div>
                <div className="wishlist-item-prices">
                  <Typography 
                    variant='body1' 
                    style={{ fontSize: "16px", fontWeight: "600", color: "#282c3f", marginTop:'3px'}}
                    className='item-prices-new'
                  >
                    Rs.{item.current_price}
                  </Typography>
                  <Typography 
                    variant='body2' 
                    style={{
                      fontSize: "14px", 
                      fontWeight: "500", 
                      color: "#7e818c", 
                      marginTop:'-20.5px',
                      marginLeft:'63px',
                      textDecoration: "line-through"
                    }}
                      className='item-prices-old'
                    >
                      Rs.{item.original_price}
                    </Typography>
                    <Typography style={{fontSize:'14px', marginLeft:'120px', color:'#ff905a', marginTop:'-20.5px'}} >
                      ({item.discount}% off)
                    </Typography>
                </div>
                <Divider sx={{width:'120%', marginLeft:'-20px', marginTop:'20px'}} />
                <Button
                  onClick={() => {
                    addToCart(item._id);
                    removeFromWishlist(item._id);
                  }}
                  sx={{width:'100%', marginTop:'10px',fontWeight:'700', color:'#ff3e6c', fontSize:'16px', marginBottom:'-13px'}}
                >
                  Move to bag
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
