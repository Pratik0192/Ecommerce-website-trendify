import React, { useState } from 'react';
import './ShopFilter.css';
import { Checkbox, Divider, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';

const ShopFilter = () => {
  const [priceRange, setPriceRange] = useState([500, 2000]);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

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
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          } 
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>Top Wear</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(782)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          } 
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>Bottom Wear</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(312)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>Foot Wear</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(52)</span>
            </Typography>}/>
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
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>Turtle</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(782)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          } 
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>WROGN</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(312)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          } 
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>Roadster</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(52)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span style={{fontSize:'14px', color: '#282c3f'}}>Mast & Harbour</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(52)</span>
            </Typography>}/>
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
        min={500}
        max={2000}
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
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span 
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: 'red',
                  display: 'inline-block',
                  marginRight: '5px',
                  borderRadius: '25px'
                }}
              />
              <span style={{fontSize:'14px', color: '#282c3f'}}>Red</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(782)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span 
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: 'green',
                  display: 'inline-block',
                  marginRight: '5px',
                  borderRadius: '25px'
                }}
              />
              <span style={{fontSize:'14px', color: '#282c3f'}}>Green</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(312)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span 
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: 'blue',
                  display: 'inline-block',
                  marginRight: '5px',
                  borderRadius: '25px'
                }}
              />
              <span style={{fontSize:'14px', color: '#282c3f'}}>Blue</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(52)</span>
            </Typography>}/>
        <FormControlLabel 
          control={
            <Checkbox 
              sx={{
                marginLeft:'-8px',
                color: '#94969f', //unchecked color
                '&.Mui-checked': {
                color: '#ff3f6c', //checked color
                }
              }} 
            />
          }
          label={
            <Typography sx={{marginLeft:'4px'}}>
              <span 
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: 'black',
                  display: 'inline-block',
                  marginRight: '5px',
                  borderRadius: '25px'
                }}
              />
              <span style={{fontSize:'14px', color: '#282c3f'}}>Black</span>
              <span style={{color:'#94969f', fontSize:'11px', marginLeft:'4px'}}>(52)</span>
            </Typography>}/>
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