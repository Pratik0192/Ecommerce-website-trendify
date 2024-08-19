import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const UserProfileDropdown = (props) => {
  const { anchorEl, open, handleClose } = props;

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
  )
}

export default UserProfileDropdown;