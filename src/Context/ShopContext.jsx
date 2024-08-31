// src/Context/ShopContext.jsx
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// Initialize default cart state
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [shippingAddress, setShippingAddress] = useState({});
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [] // Load wishlist from localStorage
  );

  // Add shipping address
  const addShippingAddress = (address) => {
    setShippingAddress(address);
  };

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove from cart
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Calculate total amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Calculate total items in cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Wishlist Management

  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      const updatedWishlist = [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => {
      const updatedWishlist = prev.filter((item) => item.id !== itemId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const isItemInWishlist = (itemId) => {
    return wishlistItems.some((item) => item.id === itemId);
  };

  // Getters for other states
  const getShippingAddress = () => {
    return shippingAddress;
  };

  // Context value object
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeCart,
    addShippingAddress,
    getShippingAddress,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isItemInWishlist,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
