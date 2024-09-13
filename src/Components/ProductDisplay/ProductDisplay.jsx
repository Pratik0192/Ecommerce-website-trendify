import React, { useEffect, useState } from "react";
import "./ProductDisplay.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Divider, Typography } from "@mui/material";
import { wishlistActions } from "../../store/wishlistSlice";
import StarIcon from '@mui/icons-material/Star';
import deliverOption from '../Assets/ddeliveryoptions.png';
import fastDelivery from '../Assets/fastDelivery.png';
import exchangeicon from '../Assets/exchange.png';
import payondeliveryicon from '../Assets/payondelivery.png';
import VerifiedIcon from '@mui/icons-material/Verified';

const ProductDisplay = (props) => {
  const { product } = props;

  const [cartItemIndex, setCartItemIndex] = useState(-1);
  const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });
  const categoriesWithoutSizes = ["mobile&tablet", "laptop", "home&living"];

  // Import the cart from Redux
  const cart = useSelector((store) => store.cart.data);
  const wishlist = useSelector((store) => store.wishlist.data);
  const dispatch = useDispatch();
  
  // Check if item is in wishlist
  let isItemInWishlist = wishlist.some((item) => item._id === product._id);
  const [liked, setLiked] = useState(isItemInWishlist);

  useEffect(() => {
    const itemIndex = cart.findIndex((item) => item._id === product._id);
    setCartItemIndex(itemIndex);
  }, [cart, product]);


  const handleMouseEnter = () => {
    setMagnifierStyle({ display: "block" });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: "none" });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagnifierStyle({
      display: "block",
      left: `${x - 50}px`,
      top: `${y - 50}px`,
      backgroundImage: `url(${product.image})`,
      backgroundPosition: `-${x * 2}px -${y * 2}px`, // Adjust zoom level here
    });
  };

  const handleWishlistClick = () => {
    setLiked(!liked);
    if (!liked) {
      dispatch(wishlistActions.addToWishlist(product));
    } else {
      dispatch(wishlistActions.removeFromWishlist(product._id));
    }
  };

  const handleAddToCart = () => {
    const itemIndex = cart.findIndex((item) => item._id === product._id);
    if(itemIndex === -1){
      const productObj = {
        _id: product._id,
        name: product.name,
        category: product.category,
        company: product.company,
        image: product.image,
        original_price: product.original_price,
        current_price: product.current_price,
        discount_percentage: product.discount_percentage,
        stock: product.stock,
        return_period: product.return_period,
        quantity: 1
      };
      dispatch(cartActions.addToCart(productObj));
    }
    else {
      dispatch(cartActions.incrementCartItemQuantity(product._id))
    }
  }

  const buttonStyle ={
    backgroundColor:'#ff4141',
    fontSize:'16px',
    width:'220px',
    padding:'14px 0',
    '&:hover':{backgroundColor:'#ff4141',}
  };

  const deliveryOptionsStyle = {
    fontSize:'16px',
    fontWeight:'700',
    color:'#282c3f',
    marginLeft:'20px',
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-main-img-container">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />
          <div className="productdisplay-magnifier" style={magnifierStyle}></div>
        </div>
      </div>
      <div className="productdisplay-right">
        <Typography sx={{fontSize:'24px', fontWeight:'700', color:'#282c3f'}} >
          {product.company}
        </Typography>
        <Typography 
          sx={{
            color:'#535665',
            padding:'5px 20px 14px 0',
            fontSize:'20px',
            fontWeight:'400',
            opacity:'.8'
          }}
        >
          {product.name}
        </Typography>
        <Box 
          sx={{
            display:'flex',
            width:'133px', 
            alignItems:'center',
            marginTop:'-10px',
            marginBottom:'12px',
            padding:'2px 8px 2px 8px',
            border:'1px solid #eaeaec',
            fontSize:'16px',
            color:'#282c3f',
            borderRadius:'2px',
            cursor:'pointer',
            '&:hover':{
              border:'1px solid #282c3f'
            }
          }}
        >
          <Typography sx={{fontSize:'16px', fontWeight:'700', color:'#282c3f'}} >{product.rating.stars}</Typography>
          <StarIcon sx={{fontSize:'16px', marginRight:'5px', marginLeft:'2px', color:'#03a685'}} />
          <Typography sx={{fontSize:'16px',fontWeight:'400', color:'#535766'}}>
            |  {product.rating.count} Ratings
          </Typography>
        </Box>

        <Divider sx={{marginBottom:'12px', marginTop:'12px'}}/>

        <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'24px', color:'#282c3f', fontWeight:'700', marginRight:'12px'}}>
            Rs.{product.current_price}
          </Typography>
          <Typography sx={{fontSize:'20px', color:'#282c3f', marginRight:'12px', textDecoration:'line-through', marginTop:'4px'}} >
            Rs.{product.original_price}
          </Typography>
          <Typography sx={{fontSize:'20px', color:'#ff905a', marginTop:'4px'}}>
            ({product.discount_percentage}% OFF)
          </Typography>
        </Box>
        <Typography sx={{color:'#03a685', fontWeight:'700', fontSize:'14px', marginTop:'5px', marginBottom:'20px'}}>
          Inclusive of all taxes
        </Typography>
        {!categoriesWithoutSizes.includes(product.category) && (
          <div className="productdisplay-right-size">
            <Typography sx={{marginBottom:'10px', color:'#000000', fontSize:'16px', fontWeight:'700'}} >
              Select Size
            </Typography>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
        )}

        <div className="productdisplay-right-buttons">
          <Button 
            onClick={handleAddToCart}
            variant="contained"
            sx={buttonStyle}
          >
            ADD TO CART {cartItemIndex !== -1 && '(' + cart[cartItemIndex].quantity + ')'}
          </Button>
          <Button 
            onClick={handleWishlistClick}
            variant="contained"
            sx={buttonStyle}
          >
            {liked ? <FavoriteIcon style={{ color: "white" }} /> : <FavoriteBorderIcon />}
            <span>WISHLIST</span>
          </Button>
        </div>

        <Divider sx={{marginTop:'17px', marginBottom:'12px'}} />
        <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'16px', fontWeight:'700',color:'#282c3f', marginRight:'10px', textTransform:'uppercase'}}>
            Delivery Options
          </Typography>
          <img src={deliverOption} alt="" style={{width:'32px', marginTop:'-5px'}}/>
        </Box>

        <Box 
          sx={{
            display:'flex', 
            justifyContent:'space-between',
            border:'1px solid #d4d5d9', 
            marginBottom:'12px', 
            marginTop:'12px',
            backgroundColor:'#f4f4f5',
            padding:'10px',
            fontSize:'16px',
            width:'250px',
            borderRadius:'5px'
          }}
        >
          <Typography>
            700030
            <VerifiedIcon sx={{marginBottom:'-3px',marginLeft:'15px', fontSize:'18px', color:'#03a685'}}/>
          </Typography>
          <Typography sx={{fontSize:'14px', fontWeight:'700', color:'#ff3e6c', marginTop:'2px', cursor:'pointer'}}>
            Change
          </Typography>
        </Box>

        <Box sx={{display:'flex', marginBottom:'13px'}}>
          <img src={fastDelivery} alt="" style={{width:'40px', marginTop:'-3px'}}/>
          <Typography sx={deliveryOptionsStyle}>
            Get it by Mon, Aug 09
          </Typography>
        </Box>
        <Box sx={{display:'flex', marginBottom:'10px'}}>
          <img src={payondeliveryicon} alt="" style={{width:'40px', marginTop:'-5px'}}/>
          <Typography sx={deliveryOptionsStyle}>
            Pay on delivery available
          </Typography>
        </Box>
        <Box sx={{display:'flex', marginBottom:'10px'}}>
          <img src={exchangeicon} alt="" style={{width:'40px', marginTop:'-5px'}}/>
          <Typography sx={deliveryOptionsStyle}>
            Easy 14 days return & exchange available
          </Typography>
          <Typography sx={{color:'#ff3e6c', fontSize:'13px', marginLeft:'15px', marginTop:'3px'}}>
            MORE INFO
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default ProductDisplay;

