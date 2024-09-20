import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import { Button } from '@mui/material';
import { Star } from '@mui/icons-material';
import { wishlistActions } from '../../store/wishlistSlice';
import { addToWishlist, removeFromWishlist } from '../../store/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = (props) => {

  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist.data);
  const isUserLoggedIn = useSelector((store) => store.user.isUserLoggedIn);
  const token = useSelector((store) => store.user.token);

  const { product, category } = props;
  const productId = product ? product._id : null;
  let isItemInWishlist = wishlist.some((item) => item.productId === productId);
  const [liked, setLiked] = useState(isItemInWishlist);
  const [isHovered, setIsHovered] = useState(false);


  const handleLikeClick = () => {
    if(isUserLoggedIn){
      setLiked(!liked);
      if (!liked) {
        const wishlistObj = {
          productId: product._id,
          name: product.name,
          category: product.category,
          company: product.company,
          image: product.image,
          original_price: product.original_price,
          current_price: product.current_price,
          discount_percentage: product.discount_percentage,
        };
        const paramObj = { payload: wishlistObj, token: token };
        dispatch(wishlistActions.setWishlistItem(wishlistObj));
        dispatch(addToWishlist(paramObj));
      } else {
        const paramObj2 = { productId: product._id, token: token };
        dispatch(wishlistActions.setRemoveWishlistProductId(product._id));
        dispatch(removeFromWishlist(paramObj2));
      }
    }
    else {
      window.location = "/login";
    }
  };

  const buttonStyle = { 
    width: '100%',
    marginTop: '0px',
    marginBottom: '23px',
    color: liked ? '#ffffff' : '#ff4141',
    backgroundColor: liked ? '#ff4141' : '#ffffff',
    borderColor: '#ff4141',
    fontWeight: '600', 
    '&:hover': { 
      borderColor: '#ff4141', 
      color: liked ? '#ffffff' : '#ff4141',
      backgroundColor: liked ? '#ff4141' : '#ffffff', 
      fontWeight: '600'
    }, 
  };

  return (
    <Card
      sx={{ height: category === "laptop" ? "355px" : "456px" }}
      className="item-container"
      variant="outlined"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={`/product/${product && product._id}`} 
        //target="_blank"
      >
        <div 
          className="image-container" 
          style={{ height: category === "laptop" ? "230px" : "333px" }}
        >
          <img
            onClick={() => window.scrollTo(0, 0)} 
            src={product && product.image} 
            alt={product && product.name} 
          />
        </div>
      </Link>
      <CardContent>
        <Typography style={{marginTop:'-18px'}}>
          {product && product.rating.stars} <Star sx={{color:'#ff4141', marginBottom:'-5px'}} /> | {product && product.rating.count}
        </Typography>
        <div className="item-info">
          {!isHovered ? (
            <>
              <Typography style={{fontSize:'16px', fontWeight:'700', color:'#282c3f'}}>
                {product && product.company}
              </Typography>
              <Typography 
                style={{
                  fontSize: "14px", 
                  marginTop: "0px", 
                  fontWeight: "400",
                  color: "#535766", 
                  whiteSpace:'nowrap', 
                  overflow:'hidden', 
                  textOverflow:'ellipsis', 
                  maxWidth:'260px'
                  }}  
              >
                {product && product.name}
              </Typography>
            </>
            ) : (
            <Button
              variant="outlined"
              startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              onClick={handleLikeClick}
              className="wishlist-button"
              sx={buttonStyle} 
            >
              {liked ? 'Wishlisted' : 'Add to Wishlist'}
            </Button>
          )}
        </div>
        <div className="item-prices-container">
          <div className="item-prices">
            <Typography 
              variant='body1' 
              style={{ fontSize: "16px", fontWeight: "600", color: "#282c3f", marginTop:'-20px'}}
              className='item-prices-new'
            >
              Rs.{product && product.current_price}
            </Typography>
            <Typography 
              variant='body2' 
              style={{ fontSize: "14px", fontWeight: "500", color: "#7e818c", marginTop:'-17px',marginLeft:'4px', textDecoration: "line-through" }}
              className='item-prices-old'
            >
              Rs.{product && product.original_price}
            </Typography>
            <Typography style={{fontSize:'14px', marginLeft:'4px', color:'#ff905a', marginTop:'-17px'}} >
              ({product && product.discount_percentage}% off)
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;