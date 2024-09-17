import React, { useState } from 'react'
import './DescriptionBox.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReviewBarLeft from '../ReviewBarLeft/ReviewBarLeft';
import ReviewHeader from '../ReviewHeader/ReviewHeader';
import ReviewListItem from '../ReviewListItem/ReviewListItem';
import List from '@mui/material/List';

import avatar1 from '../Assets/product_12.png';
import avatar2 from '../Assets/product_13.png';
import avatar3 from '../Assets/product_14.png';



const DescriptionBox = ({ product }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='descriptionbox'>
      <Box sx={{ width: '100%' }}>
        <div className="description-divider"></div>
        <div className="decriptionbox-description">
          <div className="decriptionbox-description-container">
            <div className="descriptionbox-heading-text">Description</div>
            <p>{product.description}</p>
          </div>

          <div className="description-divider"></div>
          <div className="customer-reviews-container">
            <div className="overall-review-bar">
              <ReviewBarLeft product={product}/>
            </div>
            <div className="customer-reviews">
              <ReviewHeader />
              <div className="review-list-item-container">
                <p className="top-reviews-text">Top reviews from India</p>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {product.reviews.map((review) => {
                    return (
                      <ReviewListItem
                        key={review._id}
                        avatar={avatar1}
                        review={review}
                      />
                    )
                  })}
                </List>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default DescriptionBox;
