import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';


const UserProfileDropdown = (props) => {
  const { anchorEl, open, handleClose } = props;
  const isUserLoggedIn = useSelector((store) => store.user.isUserLoggedIn);

  const menuItemStyle = {
    color: '#666', 
    padding: "3px 18px", 
    '&:hover': {
      color: '#000', 
      fontSize: '17px' 
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  }

  return (
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
        <Link to={isUserLoggedIn ? '/accountpage' : '/login'}>
          <Button 
            sx={{ 
                width: '100%', 
                height: '35px',
                color: '#ff4141', 
                borderColor: '#ff4141', 
                '&:hover': {borderColor: '#ff4141'}, 
            }} 
            variant="outlined"
          >
            {isUserLoggedIn ? 'Profile' : 'Login / Sign Up'}
          </Button>
        </Link>
      </MenuItem>
      <Divider sx={{width: '90%', margin: '0 auto'}}/>
      <Link to='/accountpage'>
        <MenuItem sx={menuItemStyle}>
          Orders
        </MenuItem>
      </Link>
      <MenuItem sx={menuItemStyle}>
        Wishlists
      </MenuItem>
      <MenuItem sx={menuItemStyle}>
        Gift Cards
      </MenuItem>
      <MenuItem sx={menuItemStyle}>
        Contact Us
      </MenuItem>
      <Divider sx={{width: '90%', margin: '0 auto'}}/>
      <MenuItem sx={menuItemStyle}>
        Coupons
      </MenuItem>
      <MenuItem sx={menuItemStyle}>
        Saved Addresses
      </MenuItem>
      {isUserLoggedIn && <MenuItem sx={menuItemStyle} onClick={handleLogout}>
        Logout
      </MenuItem>}
    </Menu>
  )
}

export default UserProfileDropdown;