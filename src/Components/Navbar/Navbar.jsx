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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
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

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="Dropdown Icon" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu('shop') }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('mens') }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('womens') }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('kids') }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('home&living') }}><Link style={{ textDecoration: 'none' }} to='/home&living'>Home & Living</Link>{menu === "home&living" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('laptop') }}><Link style={{ textDecoration: 'none' }} to='/laptop'>Laptops</Link>{menu === "laptop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('mobile&tablet') }}><Link style={{ textDecoration: 'none' }} to='/mobile&tablet'>Mobile & Tablets</Link>{menu === "mobile&tablet" ? <hr /> : <></>}</li>
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
              <BiUser className='nav-icon' />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem sx={{'&:hover': {backgroundColor:'transparent'} }}>
          <Typography sx={{ fontSize: '20px',fontWeight:'700', color: '#000' }}>
              Welcome 
            </Typography>
          </MenuItem>
          <MenuItem sx={{'&:hover':{backgroundColor: 'transparent'} }}>
          <Typography sx={{ fontSize: '14px', color: '#666' }}>
              To access accounts and manage orders
            </Typography>
          </MenuItem>
          <MenuItem sx={{'&:hover':{backgroundColor: 'transparent'} }}>
            <Link to='/login'>
            <Button 
                sx={{ 
                    width: '100%', 
                    height: '45px',
                    color: '#ff4141', 
                    borderColor: '#ff4141', 
                    '&:hover': {borderColor: '#ff4141'}, 
                }} 
                variant="outlined">
                Login / Sign Up
            </Button>
            </Link>
          </MenuItem>
          <Divider sx={{width: '90%', margin: '0 auto'}}/>
          <MenuItem sx={{color: '#666', '&:hover': {color: '#000', fontSize: '17px'}}}>
            Orders
          </MenuItem>
          <MenuItem sx={{color: '#666', '&:hover': {color: '#000', fontSize: '17px' }}}>
            Wishlists
          </MenuItem>
          <MenuItem sx={{color: '#666', '&:hover': {color: '#000', fontSize: '17px' }}}>
            Gift Cards
          </MenuItem>
          <MenuItem sx={{color: '#666', '&:hover': {color: '#000', fontSize: '17px' }}}>
            Contact Us
          </MenuItem>
          <Divider sx={{width: '90%', margin: '0 auto'}}/>
          <MenuItem sx={{color: '#666', '&:hover': {color: '#000', fontSize: '17px' }}}>
            Coupons
          </MenuItem>
          <MenuItem sx={{color: '#666', '&:hover': {color: '#000', fontSize: '17px' }}}>
            Saved Addresses
          </MenuItem>
        </Menu>
        <AiOutlineHeart className='nav-icon' />
        <Link to='/cart'>
          <BsBag className='nav-icon' />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
