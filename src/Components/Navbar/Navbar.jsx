import React, { useContext, useRef, useState, useCallback } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';
import UserProfileDropdown from '../UserProfileDropdown/UserProfileDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/productsSlice';
import { debounce } from 'lodash';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '45ch',
      },
    },
  },
}));

const linkButtonStyle = {
  color:'#000',
}

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
    dispatch(productActions.setTriggerKeywordChange(true));
    dispatch(productActions.setfetchParamKeyword(value));
  }, 550);

  const handleSearchChange = (e) => {
    debouncedHandleSearchChange(e.target.value);
  }

  // Calculate total number of wishlist items
  const totalWishlistItems = wishlist.length;

  return (
    <AppBar position="sticky" sx={{backgroundColor:'#ffffff'}}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#000' }}>
          MyLogo
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button sx={linkButtonStyle}>Men</Button>
          <Button sx={linkButtonStyle}>Women</Button>
          <Button sx={linkButtonStyle}>Kids</Button>
          <Button sx={linkButtonStyle}>Home & Living</Button>
          <Button sx={linkButtonStyle}>Laptops</Button>
          <Button sx={linkButtonStyle}>Mobiles</Button>
        </Box>

        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for product, brands and more"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {/* Account Icon */}
        <IconButton size="large">
          <AccountCircle />
        </IconButton>

        {/* Wishlist Icon */}
        <IconButton size="large">
          <FavoriteBorderIcon />
        </IconButton>

        {/* Cart Icon */}
        <IconButton size="large">
          <ShoppingBagIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
