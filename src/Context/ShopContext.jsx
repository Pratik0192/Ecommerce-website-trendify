import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultcart());
  const [shippingAddress, setShippingAddress] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]); // New state for wishlist

  const addShippingAddress = (address) => {
    setShippingAddress(address);
  };

  // Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove from Cart
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Calculate Total Amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

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
  const showWishList = () => {
    return wishlistItems;
  };

  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      let temp = [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(temp));
      return temp;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const isItemInWishlist = (itemId) => {
    return wishlistItems.some((item) => item.id === itemId);
  };

  const getShippingAddress = () => {
    return shippingAddress;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeCart,
    addShippingAddress,
    getShippingAddress,
    wishlistItems, // Add wishlist to context
    addToWishlist, // Add item to wishlist
    removeFromWishlist, // Remove item from wishlist
    isItemInWishlist, // Check if an item is in wishlist
    showWishList,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
