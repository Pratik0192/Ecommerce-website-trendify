import React, { useState, useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { ShopContext } from '../../Context/ShopContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 

const Item = (props) => {
  const { 
    addToWishlist, 
    removeFromWishlist, 
    isItemInWishlist 
  } = useContext(ShopContext);
  
  const [liked, setLiked] = useState(isItemInWishlist(props.id));

  const handleLikeClick = () => {
    setLiked(!liked);
    if (!liked) {
      addToWishlist(props);
    } else {
      removeFromWishlist(props.id);
    }
  };

  return (
    <Card className='item'>
      <div className="image-container">
        <Link to={`/product/${props.id}`}>
          <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} />
        </Link>
        <div className="wishlist-overlay">
          <IconButton
            aria-label="add to favorites"
            className="wishlist-button"
            onClick={handleLikeClick}
          >
            {liked ? (
              <FavoriteIcon className="filled" />
            ) : (
              <FavoriteBorderIcon className="outlined" />
            )}
            <span>Add to Wishlist</span>
          </IconButton>
        </div>
      </div>
      <CardContent>
        <Typography 
          style={{fontSize: "18px", marginTop:"0px"}}  
        >
          {props.name}
        </Typography>
        <div className="item-prices-container">
          <div className="item-prices">
            <Typography 
              variant='body1' 
              style={{fontSize: "18px", fontWeight: "600", color: "#374151"}}
              className='item-prices-new'
            >
              Rs.{props.new_price}
            </Typography>
            <Typography 
              variant='body2' 
              style={{fontSize: "16px", fontWeight: "500", color: "#8c8c8c", textDecoration: "line-through"}}
              className='item-prices-old'
            >
              Rs.{props.old_price}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Item;
