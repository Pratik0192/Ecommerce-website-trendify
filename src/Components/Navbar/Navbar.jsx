import React, { useContext, useRef, useState, useCallback } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import dropdown_icon from '../Assets/nav_dropdown.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import UserProfileDropdown from '../UserProfileDropdown/UserProfileDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/productsSlice';
import { debounce } from 'lodash';


const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const menuRef = useRef();
  const dispatch = useDispatch();

  const cartLength = useSelector((store) => store.cart.totalItems);
  const wishlist = useSelector((store) => store.wishlist.data);

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

  const handlePageRouteChange = (pageName) => {
    setMenu(pageName);
    dispatch(productActions.resetProductsList())
  }

  const debouncedHandleSearchChange = debounce((value) => {
    console.log(value);
    dispatch(productActions.setfetchParamKeyword(value));
  }, 550);

  const handleSearchChange = (e) => {
    debouncedHandleSearchChange(e.target.value);
  }

  // Calculate total number of wishlist items
  const totalWishlistItems = wishlist.length;

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="Dropdown Icon" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => handlePageRouteChange('shop')}>
          <Link className="nav-item-link" to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => handlePageRouteChange('mens')}>
          <Link className="nav-item-link" to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => handlePageRouteChange('womens')}>
          <Link className="nav-item-link" to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => handlePageRouteChange('kids')}>
          <Link className="nav-item-link" to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}
        </li>
        <li onClick={() => handlePageRouteChange('home&living')}>
          <Link className="nav-item-link" to='/home&living'>Home & Living</Link>{menu === "home&living" ? <hr /> : <></>}
        </li>
        <li onClick={() => handlePageRouteChange('laptop')}>
          <Link className="nav-item-link" to='/laptop'>Laptops</Link>{menu === "laptop" ? <hr /> : <></>}
        </li>
        <li onClick={() => handlePageRouteChange('mobile&tablet')}>
          <Link className="nav-item-link" to='/mobile&tablet'>Mobile & Tablets</Link>{menu === "mobile&tablet" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="search">
        <BiSearch className='search-icon' />
        <input 
          type="text" 
          placeholder="search for product, brands and more"
          onChange={handleSearchChange}
        />
      </div>
      <div className="nav-login-cart">
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, maxWidth: "40px"}}
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
        {cartLength > 0 && (
          <div className="nav-cart-count">{cartLength}</div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
