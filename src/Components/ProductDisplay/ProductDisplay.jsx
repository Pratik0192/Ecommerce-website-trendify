import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ShopContext } from "../../Context/ShopContext";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDisplay = (props) => {
  const { product } = props;
  const { 
    addToWishlist, 
    removeFromWishlist, 
    isItemInWishlist 
  } = useContext(ShopContext);

  const [cartItemIndex, setCartItemIndex] = useState(-1);
  const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });
  const categoriesWithoutSizes = ["mobile&tablet", "laptop"];

  // Import the cart from Redux
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  
  // Check if item is in wishlist
  const [liked, setLiked] = useState(isItemInWishlist(product._id));

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
      addToWishlist(product);
    } else {
      removeFromWishlist(product.id);
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
        <h2>{product.company}</h2>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>({product.rating.count})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
          Rs.{product.current_price}
            
          </div>
          <div className="productdisplay-right-price-new">
          Rs.{product.original_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        {!categoriesWithoutSizes.includes(product.category) && (
          <div className="productdisplay-right-size">
            <h2>Select Size</h2>
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
          <button onClick={handleAddToCart}>
            ADD TO CART {cartItemIndex !== -1 && '(' + cart[cartItemIndex].quantity + ')'}
          </button>
          <button className="wishlist-button" onClick={handleWishlistClick}>
            {liked ? <FavoriteIcon style={{ color: "white" }} /> : <FavoriteBorderIcon />}
            <span>WISHLIST</span>
          </button>
        </div>

        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

