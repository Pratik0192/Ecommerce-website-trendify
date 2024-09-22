import React, { useContext, useRef, useState, useCallback } from 'react';
// import './Navbar.css';
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  padding:'4px 0px',
  marginRight:'20px',
  backgroundColor: '#f5f5f6',
  '&:hover': {
    backgroundColor: '#f5f5f6',
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
  color: '#696e79',
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
  borderRadius:'0px',
  color:'#282c3f',
  fontSize:'15px',
  fontWeight:'600',
  '&:hover':{
    backgroundColor:'#fff',
  }
}

const countStyle = {
  width:'16px',
  height:'16px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'red',
  color:'#fff',
  zIndex:'1',
  borderRadius:'11px',
  fontSize:'13px',
  marginTop:'-25px',
  marginLeft:'-15px'
}

const navIconTypoStyle = {
  color:'#282c3f', 
  marginTop:'-10px',
  fontSize:'12px',
  fontWeight:'700'
}

const navIconStyle = {
  margin:'0px 3px',
  color:'#282c3f',
  marginTop:'-12px',
}

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef();
  const cartLength = useSelector((store) => store.cart.totalItems);
  const wishlist = useSelector((store) => store.wishlist.data);
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
    //dispatch(productActions.resetProductsList())
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
    <AppBar position="sticky" sx={{backgroundColor:'#ffffff', padding:'5px 16px'}}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{display:'flex', alignItems:'center', flexGrow:'1'}}>
          <Link to='/'>
            <img src={logo} alt="" style={{width:'50px'}} />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <ul style={{display:'flex'}}>
            <li onClick={() => handlePageRouteChange('mens')}>
              <Link to='/mens'>
                <Button disableRipple sx={linkButtonStyle}>Men</Button>
              </Link>
            </li>
            <li onClick={() => handlePageRouteChange('womens')}>
              <Link to='/womens'>
                <Button disableRipple sx={linkButtonStyle}>Women</Button>
              </Link>
            </li>
            <li onClick={() => handlePageRouteChange('kids')}>
              <Link to='/kids'>
                <Button disableRipple sx={linkButtonStyle}>Kids</Button>
              </Link>
            </li>
            <li onClick={() => handlePageRouteChange('home&living')}>
              <Link to='/home&living'>
                <Button disableRipple sx={linkButtonStyle}>Home & Living</Button>
              </Link>
            </li>
            <li onClick={() => handlePageRouteChange('laptop')}>
              <Link to='/laptop'>
                <Button disableRipple sx={linkButtonStyle}>Laptops</Button>
              </Link>
            </li>
            <li onClick={() => handlePageRouteChange('mobile&tablet')}>
              <Link to='/mobile&tablet'>
                <Button disableRipple sx={linkButtonStyle}>Mobiles</Button>
              </Link>
            </li>
          </ul>
        </Box>

        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{color:'#c4c5c9', marginTop:'-6px'}}/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for product, brands and more"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchChange}
          />
        </Search>

        {/* Account Icon */}
        <Tooltip>
          <IconButton 
            size="large"
            onClick={handleClick}
            sx={{
              '&:hover':{
                backgroundColor:'transparent'
              }
            }}
          >
            <PersonOutlineOutlinedIcon sx={{fontSize:'30px',...navIconStyle}}/>
          </IconButton>
          <Typography sx={navIconTypoStyle}>My Profile</Typography>
        </Tooltip>
        <UserProfileDropdown 
          anchorEl = {anchorEl}
          open = {open}
          handleClose = {handleClose}
        />
        
        {/* Wishlist Icon */}
        <Tooltip>
          <IconButton
            size="large" 
            component={Link} 
            to="/wishlist"
            sx={{
              '&:hover':{
                backgroundColor:'transparent'
              }
            }}
          >
            <FavoriteBorderIcon sx={{fontSize:'30px',...navIconStyle}}/>
              {totalWishlistItems > 0 && (
                <div 
                  style={countStyle}
                >
                  {totalWishlistItems}
                </div>
              )}
          </IconButton>
          <Typography sx={{...navIconTypoStyle, marginLeft:'10px'}}>Wishlist</Typography>
        </Tooltip>

        {/* Cart Icon */}
        <Tooltip>
          <IconButton 
            size="large"
            component={Link}
            to="/cart"
            sx={{
              '&:hover':{
                backgroundColor:'transparent'
              }
            }}
          >
            <ShoppingBagOutlinedIcon sx={{fontSize:'30px',...navIconStyle}}/>
            {cartLength > 0 && (
              <div
                style={countStyle}
              >
                {cartLength}
              </div>
            )}
          </IconButton>
          <Typography sx={{...navIconTypoStyle, marginLeft:'17.5px'}}>Cart</Typography>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
