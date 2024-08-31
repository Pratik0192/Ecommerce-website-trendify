import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import "./Wishlist.css";


const Wishlist = () => {
  //const { wishlistItems } = useContext(ShopContext); // Access wishlist items from context
  const [wishlistItems, setWishListItems] = useState([]);

  useEffect(() => {
    //console.log(wishlistItems);
    setWishListItems(JSON.parse(localStorage.getItem("wishlist")));
  }, []);

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
              <p>{item.name}</p>
              <p>Price: Rs.{item.new_price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
