import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import dropdown_icon from '../Assets/nav_dropdown.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import UserProfileDropdown from '../UserProfileDropdown/UserProfileDropdown';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems, wishlistItems } = useContext(ShopContext);
  const menuRef = useRef();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Calculate total number of wishlist items
  const totalWishlistItems = wishlistItems.length;

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="Dropdown Icon" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu('shop') }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('mens') }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('womens') }}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('kids') }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('home&living') }}>
          <Link style={{ textDecoration: 'none' }} to='/home&living'>Home & Living</Link>{menu === "home&living" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('laptop') }}>
          <Link style={{ textDecoration: 'none' }} to='/laptop'>Laptops</Link>{menu === "laptop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('mobile&tablet') }}>
          <Link style={{ textDecoration: 'none' }} to='/mobile&tablet'>Mobile & Tablets</Link>{menu === "mobile&tablet" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="search">
        <BiSearch className='search-icon' />
        <input type="text" placeholder='search for product, brands and more' />
      </div>
      <div className="nav-login-cart">
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <div className='nav-icon-container'>
                <BiUser className='nav-icon' />
                <p>Profile</p>
              </div>
            </IconButton>
          </Tooltip>
        </Box>
        <UserProfileDropdown
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
        <Link to='/wishlist' className='nav-link'>
        <div className='nav-icon-container'>
          <AiOutlineHeart className='nav-icon' />
          <p>Wishlist</p>
          </div>
          {totalWishlistItems > 0 && (
            <div className="nav-wishlist-count">{totalWishlistItems}</div>
          )}
        </Link>
        <Link to='/cart' className='nav-link'>
          <div className='nav-icon-container'>
            <BsBag className='nav-icon' />
            <p>Cart</p>
          </div>
        </Link>
        {getTotalCartItems() > 0 && (
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
