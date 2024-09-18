import React, { useState, useEffect, useCallback } from 'react';
import './ShopFilter.css';
import { Checkbox, Divider, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';
import { fetchProducts, fetchAllBrands } from '../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/productsSlice';
import { debounce } from 'lodash';


const ShopFilter = (props) => {
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const brandNames = useSelector((store) => store.products.brands);
  const dispatch = useDispatch();

  const checkboxStyle = {
    marginLeft:'-8px',
    color: '#94969f', //unchecked color
    '&.Mui-checked': {
      color: '#ff3f6c', //checked color
    }
  }

  const subCategories = [
    { name: "Top Wear", count: 782 },
    { name: "Bottom Wear", count: 312 },
    /* { name: "Foot Wear", count: 52 }, */
  ];

  const colorsList = [
    { name: "Red", count: 782, backgroundColor: "red" },
    { name: "Green", count: 312, backgroundColor: "green" },
    { name: "Blue", count: 52, backgroundColor: "blue" },
    { name: "Black", count: 52, backgroundColor: "black" },
  ];

  const debouncedHandleChange = useCallback(
    debounce((newValue) => {
      setPriceRange(newValue);

      let priceString = newValue[0] + " " + newValue[1];
      console.log('Price', priceString);
      let paramObj = {
        category: encodeURIComponent(props.category),
        brand: encodeURIComponent(""),
        sort: encodeURIComponent("current_price desc"),
        price: encodeURIComponent(priceString)
      }
      dispatch(fetchProducts(paramObj));
    }, 500),
    []
  );

  const handleSliderChange = (event, newValue) => {
    //console.log(newValue);
    debouncedHandleChange(newValue);
  };

  useEffect(() => {
    const fetchBrandsAsync = async () => {
      await dispatch(fetchAllBrands(props.category));
    }
    
    fetchBrandsAsync();
  }, [dispatch]);

  /* useEffect(() => {
    setBrandsList(brandNames.map((brandname) => {
      let brand = { name: brandname._id, count: brandname.count };
      return brand;
    }));
  }, [brandNames]); */

  const handleCheckboxChange = async (event) => {
    dispatch(productActions.resetProductsList());
    let paramObj = {};
    paramObj.category = encodeURIComponent(props.category);
    paramObj.sort = encodeURIComponent("");
    paramObj.price = encodeURIComponent("");
    if(event.target.checked){
      paramObj.brand = encodeURIComponent(event.target.name);
    }
    else {
      paramObj.brand = encodeURIComponent("");
    }
    console.log(event.target.name);
    await dispatch(fetchProducts(paramObj));
  }

  return (
    <div className='shop-filter'>
      {/*Filter heading section*/}
      <Typography
        variant='h6'
        gutterBottom
        sx={{
          fontSize:'16px',
          fontWeight:'700',
          color: '#000000',
          marginLeft: '-8px'
        }}
      >
        FILTERS
      </Typography>
      <Divider 
        sx={{
          width: '100%',
          marginTop: '15px',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      />

      {/*Filter category section */}

      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#282c3f',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      >
        CATEGORY
      </Typography>
      <FormGroup>
        {subCategories.map((category) => {
          return (
            <FormControlLabel 
              key={category.name}
              control={
                <Checkbox 
                  sx={checkboxStyle} 
                />
              } 
              label={
                <Typography sx={{marginLeft:'4px'}}>
                  <span style={{fontSize:'14px', color: '#282c3f'}}>{category.name}</span>
                  <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>({category.count})</span>
                </Typography>
              }
            />
          )
        })}
      </FormGroup>
      <Divider 
        sx={{
          width: '100%',
          marginTop: '15px',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      />

      {/*Filter Brand section */}

      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#282c3f',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      >
        BRAND
      </Typography>
      <FormGroup>
        {brandNames.map((brand) => {
          return (
            <FormControlLabel
              key={brand._id}
              control={
                <Checkbox
                  name={brand._id}
                  onChange={handleCheckboxChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={checkboxStyle} 
                />
              }
              label={
                <Typography sx={{marginLeft:'4px'}}>
                  <span style={{fontSize:'14px', color: '#282c3f'}}>{brand._id}</span>
                  <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>({brand.count})</span>
                </Typography>
              }
            />
          )
        })}
        <Typography
          sx={{
            fontSize: '15px',
            marginTop: '10px',
            marginLeft:'22px',
            color: '#ff3f6c'
          }}
        >
          +56 more
        </Typography>
      </FormGroup>
      <Divider 
        sx={{
          width: '100%', 
          marginTop: '15px',
          marginBottom: '15px',
          marginLeft: '-8px',
          marginRight: '-8px'
        }}
      />

      {/*Filter prices section */}

      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#282c3f',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      >
        PRICE
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay='auto'
        step={1}
        marks
        min={100}
        max={5500}
        sx={{
          color: '#ff3f6c',
        }}
      />
      <Typography sx={{ fontSize: '14px', color: '#282c3f' }}>
        Rs.{priceRange[0]} - Rs.{priceRange[1]}
      </Typography>

      <Divider
        sx={{
          width: '100%', 
          marginTop: '15px',
          marginBottom: '15px',
          marginLeft: '-8px',
          marginRight: '-8px'
        }}
      />

      {/*Filter color section */}

      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#282c3f',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      >
        COLOR
      </Typography>
      <FormGroup>
        {colorsList.map((color) => {
          return (
            <FormControlLabel
              key={color.name}
              control={
                <Checkbox 
                  sx={checkboxStyle} 
                />
              }
              label={
                <Typography sx={{marginLeft:'4px'}}>
                  <span 
                    style={{
                      width: '14px',
                      height: '14px',
                      backgroundColor: color.backgroundColor,
                      display: 'inline-block',
                      marginRight: '5px',
                      borderRadius: '25px'
                    }}
                  />
                  <span style={{fontSize:'14px', color: '#282c3f'}}>{color.name}</span>
                  <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>({color.count})</span>
                </Typography>
              }
            />
          )
        })}
        <Typography
          sx={{
            fontSize: '15px',
            marginTop: '10px',
            marginLeft:'22px',
            color: '#ff3f6c'
          }}
        >
          +38 more
        </Typography>
      </FormGroup>
      <Divider
        sx={{
          width: '90%', 
          marginTop: '15px',
          marginBottom: '15px',
          marginLeft: '-8px'
        }}
      />
    </div>
  )
}

export default ShopFilter