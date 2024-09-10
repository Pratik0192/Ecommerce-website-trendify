import React, { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getDefaultWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || []; // Load wishlist from localStorage
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [shippingAddress, setShippingAddress] = useState({});
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

  // Add shipping address
  const addShippingAddress = (address) => {
    setShippingAddress(address);
  };

  // Add to cart
  const addToCart = (itemId) => {
    console.log("item id: ",itemId);
    //setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const product = all_product.find(item => item._id === itemId);
    toast.success(`Added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Remove from cart
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const product = all_product.find(item => item._id === itemId);
    toast.error(`Removed from cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Wishlist Management
  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      const updatedWishlist = [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      toast.success(`Added to wishlist!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => {
      const item = prev.find(item => item._id === itemId);
      const updatedWishlist = prev.filter((item) => item._id !== itemId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      toast.error(`Removed from wishlist!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return updatedWishlist;
    });
  };

  const isItemInWishlist = (itemId) => {
    return wishlistItems.some((item) => item._id === itemId);
  };

  // Getters for other states
  const getShippingAddress = () => {
    return shippingAddress;
  };

  // Context value object
  const contextValue = {
    /* getTotalCartAmount: () => Object.keys(cartItems).reduce((total, key) => {
      const itemInfo = all_product.find(product => product._id === Number(key));
      return total + (itemInfo ? itemInfo.new_price * cartItems[key] : 0);
    }, 0), */
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
    showWishList: () => wishlistItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
      <ToastContainer />
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
