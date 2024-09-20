import React, { useEffect, useState } from "react";
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Shop from './Pages/Shop/Shop';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';

// Import Checkout Components
import OrderAddress from './Pages/OrderAddress/OrderAddress';
import OrderReview from './Pages/OrderReview/OrderReview';
import OrderPayment from './Pages/OrderPayment/OrderPayment';
import OrderConfirmed from "./Components/Checkout/OrderConfirmed/OrderConfirmed";

// Import Banner Images
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import AccountPage from "./Pages/AccountPage/AccountPage";

import { fetchUserDetails } from "./store/userSlice";
import { fetchCartData } from "./store/cartSlice";
import { fetchWishlistData } from "./store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const isUserLoggedIn = useSelector((store) => store.user.isUserLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token) {
      console.log("Token: ", token);
      dispatch(fetchUserDetails(token));
      dispatch(fetchCartData(token));
      dispatch(fetchWishlistData(token));
    } else {
      console.log("Token is Null")
    }
  }, [dispatch]);

  const hideNavbar = () => {
    setIsNavbarVisible(false);
  }

  const showNavbar = () => {
    setIsNavbarVisible(true);
  }

  return (
    <div> 
      <BrowserRouter>
        {isNavbarVisible && <Navbar />}
        <Routes>
          <Route path='/login' element={<LoginSignup authTab="Login" key="login"/>}/>
          <Route path='/signup' element={<LoginSignup authTab="SignUp" key="signup"/>}/>
          <Route path='/' element={<Shop showNavbar={showNavbar}/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" key="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" key="kid"/>}/>
          <Route path='/home&living' element={<ShopCategory banner={kid_banner} category="home&living" key="home&living"/>}/>
          <Route path='/laptop' element={<ShopCategory banner={kid_banner} category="laptop" key="laptop"/>}/>
          <Route path='/mobile&tablet' element={<ShopCategory banner={kid_banner} category="mobile&tablet" key="mobile&tablet"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart showNavbar={showNavbar} />}/>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path='/checkout/address' element={<OrderAddress hideNavbar={hideNavbar} />}/>
          <Route path='/checkout/review' element={<OrderReview hideNavbar={hideNavbar} />}/>
          <Route path='/checkout/payment' element={<OrderPayment hideNavbar={hideNavbar} />}/>
          <Route path='/orderconfirmed' element={<OrderConfirmed hideNavbar={hideNavbar} />}/>
          <Route path='/accountpage' element={<AccountPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
