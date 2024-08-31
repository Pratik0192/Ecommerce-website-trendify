import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
import Wishlist from './Components/Wishlist/Wishlist';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';


function App() {
  localStorage.setItem('wishlist',JSON.stringify([]));
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/laptop' element={<ShopCategory banner={kid_banner} category="laptop"/>}/>
        <Route path='/mobile&tablet' element={<ShopCategory banner={kid_banner} category="mobile&tablet"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/checkout/:section' element={<Checkout section="shipping"/>}/>
        {/* <Route path='/checkout/confirm' element={<Checkout section="confirm"/>}/>
        <Route path='/checkout/payment' element={<Checkout section="payment"/>}/> */}
        <Route path='/login' element={<LoginSignup authTab="Login"/>}/>
        <Route path='/signup' element={<LoginSignup authTab="SignUp"/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
