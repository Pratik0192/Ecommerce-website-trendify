import React from 'react';
import './ShopFilter.css';
import { Divider } from '@mui/material';

const ShopFilter = () => {
  return (
    <div>
        <div className="heading">
            <h6>CATEGORIES</h6>
            <div className="heading-checkbox">
                <input type="checkbox"/> Tshirts(14225)
            </div>
            <div className="heading-checkbox">
                <input type="checkbox"/> Tshirts(14225)
            </div>
        </div>
        <Divider sx={{width: '90%', margin: '0 auto'}}/>
        <div className="categories">

        </div>
        <Divider sx={{width: '90%', margin: '0 auto'}}/>
        <div className="brand">

        </div>
        <Divider sx={{width: '90%', margin: '0 auto'}}/>
        <div className="price">

        </div>
        <Divider sx={{width: '90%', margin: '0 auto'}}/>
        <div className="color">

        </div>
        <Divider sx={{width: '90%', margin: '0 auto'}}/>
        <div className="discount-range">

        </div>
    </div>
  )
}

export default ShopFilter