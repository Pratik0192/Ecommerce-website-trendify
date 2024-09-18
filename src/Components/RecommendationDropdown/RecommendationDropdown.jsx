import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { fetchProducts } from '../../store/productsSlice';
import { productActions } from '../../store/productsSlice';
import { useDispatch } from 'react-redux';


const RecommendationDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Recommended');
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = async (option) =>{
    setSelectedOption(option);
    setAnchorEl(null);

    dispatch(productActions.resetProductsList());
    let paramObj = {};
    paramObj.category = encodeURIComponent(props.category);
    paramObj.brand = encodeURIComponent("");
    paramObj.price = encodeURIComponent("");
    if(option === "Better Discount"){
      paramObj.sort = encodeURIComponent("discount_percentage desc");
    } else if (option === "Price: High to Low"){
      paramObj.sort = encodeURIComponent("current_price desc");
    } else if (option === "Price: Low to High"){
      paramObj.sort = encodeURIComponent("current_price asc");
    } else if (option === "Latest First"){
      paramObj.sort = encodeURIComponent("createdAt desc");
    } else if (option === "Popularity"){
      paramObj.sort = encodeURIComponent("stock desc");
    } else if (option === "Recommended"){
      console.log("Comming Soon");
    } else if (option === "Customer Rating"){
      console.log("Comming Soon");
    }

    await dispatch(fetchProducts(paramObj));
  }

  const buttonStyle = {
    padding:'9px 14px',
    width:'300px',
    color:'#282c3f',
    fontSize:'14px',
    border:'1px solid #d4d5d9',
    textTransform:'none',
    justifyContent:'flex-start',
    textAlign:'center',
    marginRight:'40px',
    '&:hover':{
        border:'1px solid #d4d5d9'
    }
  };

  const menuStyle ={
    color:'#282c3f',
    fontSize:'14px',
    padding: '10px 20px',
  };

  return (
    <div>
      <Button 
        aria-controls="recommendation-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        variant="outlined"
        sx={buttonStyle}
      >
        Sort by: <span style={{fontWeight:'700'}} >{selectedOption}</span> 
      </Button>
      <Menu
        id="recommendation-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
            sx: {
                width:'300px',
            }
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('Better Discount')} sx={menuStyle}>
          Better Discount
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Price: High to Low')} sx={menuStyle}>
          Price: High to Low
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Price: Low to High')} sx={menuStyle}>
          Price: Low to High
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Latest First")} sx={menuStyle}>
          Latest First
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Popularity')} sx={menuStyle}>
          Popularity
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Recommended')} sx={menuStyle}>
          Recommended
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Customer Rating')} sx={menuStyle}>
          Customer Rating
        </MenuItem>
      </Menu>
    </div>
  );
}

export default RecommendationDropdown;
