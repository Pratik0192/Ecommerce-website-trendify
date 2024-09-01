// src/Components/Item/Item.jsx
import React, { useState, useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { ShopContext } from '../../Context/ShopContext'; // Import the context

const Item = (props) => {
  const { 
    addToWishlist, 
    removeFromWishlist, 
    isItemInWishlist 
  } = useContext(ShopContext); // Access wishlist functions
  const [liked, setLiked] = useState(isItemInWishlist(props.id)); // Check if the item is already liked

  const handleLikeClick = () => {
    setLiked(!liked);
    if (!liked) {
      addToWishlist(props); // Add item to wishlist
    } else {
      removeFromWishlist(props.id); // Remove item from wishlist
    }
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices-container">
        <div className="item-prices">
          <div className="item-price-new">
            Rs.{props.new_price}
          </div>
          <div className="item-price-old">
            Rs.{props.old_price}
          </div>
        </div>
        {/* IconButton changes based on 'liked' state */}
        <IconButton
          aria-label="add to favorites" 
          className="icon-button" 
          onClick={handleLikeClick}
        >
          {liked ? (
            <FavoriteIcon className="filled" />  // Filled heart icon
          ) : (
            <FavoriteBorderIcon className="outlined" />  // Outlined heart icon
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Item;
