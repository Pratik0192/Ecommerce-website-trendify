import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { productActions } from '../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';


const RecommendationDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Recommended');
  const fetchParams = useSelector((store) => store.products.fetchParams);
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

    let sortBy = "";
    if (option === "Recommended"){
      sortBy = "createdAt asc";
    } else if(option === "Better Discount"){
      sortBy = "discount_percentage desc";
    } else if (option === "Price: High to Low"){
      sortBy = "current_price desc";
    } else if (option === "Price: Low to High"){
      sortBy = "current_price asc";
    } else if (option === "Latest First"){
      sortBy = "createdAt desc";
    } else if (option === "Popularity"){
      sortBy = "stock desc";
    } else if (option === "Customer Rating"){
      sortBy = "rating.stars desc";
    }
    let paramObj = {};
    dispatch(productActions.setTriggerKeywordChange(false));
    paramObj.keyword = "";
    paramObj.sort = sortBy;
    props.fetchProductsAsync("", fetchParams.brand, sortBy, fetchParams.price, 1);
    dispatch(productActions.setfetchParams(paramObj));
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
        <MenuItem onClick={() => handleMenuItemClick('Recommended')} sx={menuStyle}>
          Recommended
        </MenuItem>
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
        <MenuItem onClick={() => handleMenuItemClick('Customer Rating')} sx={menuStyle}>
          Customer Rating
        </MenuItem>
      </Menu>
    </div>
  );
}

export default RecommendationDropdown;
