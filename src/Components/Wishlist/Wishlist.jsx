// src/Components/Wishlist/Wishlist.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(ShopContext); // Access wishlist items and remove function from context

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="wishlist-item-info">
                <p>{item.name}</p>
                <p>Price: Rs.{item.new_price}</p>
                <button 
                  className="remove-button" 
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

