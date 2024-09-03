import React, { useState, useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { ShopContext } from '../../Context/ShopContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import { Button } from '@mui/material';
import { Star } from '@mui/icons-material';

const Item = (props) => {
  const { 
    addToWishlist, 
    removeFromWishlist, 
    isItemInWishlist 
  } = useContext(ShopContext);
  
  const [liked, setLiked] = useState(isItemInWishlist(props.id));
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    if (!liked) {
      addToWishlist(props);
    } else {
      removeFromWishlist(props.id);
    }
  };

  const buttonStyle = { 
    width: '100%',
    marginTop: '0px',
    marginBottom: '23px',
    color: '#ff4141', 
    borderColor: '#ff4141',
    fontWeight: '600', 
    '&:hover': { borderColor: '#ff4141', color: '#ff4141', fontWeight: '600'}, 
  };

  return (
    <Card 
      className='item'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          src={props.image} 
          alt={props.name} 
        />
      </Link>
      <CardContent>
        <Typography style={{marginTop:'-10px'}}>
          4.5 <Star sx={{color:'#ff4141', marginBottom:'-5px'}} /> | 172
        </Typography>
        <div className="item-info">
          {!isHovered ? (
            <>
              <Typography style={{fontSize:'16px', fontWeight:'700', color:'#282c3f', display:'block', marginBottom:'60px'}}>
                Roadster
              </Typography>
              <Typography 
                style={{ fontSize: "14px", marginTop: "0px", marginLeft:'-80px' ,fontWeight: "400",color: "#535766", whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:'260px',display:'block'}}  
              >
                {props.name}
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
              Rs.{props.new_price}
            </Typography>
            <Typography 
              variant='body2' 
              style={{ fontSize: "14px", fontWeight: "500", color: "#7e818c", marginTop:'-18px',marginLeft:'-1px' ,textDecoration: "line-through" }}
              className='item-prices-old'
            >
              Rs.{props.old_price}
            </Typography>
            <Typography style={{fontSize:'14px', marginLeft:'-5px', color:'#ff905a', marginTop:'-19px'}} >
              (50% off)
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Item;