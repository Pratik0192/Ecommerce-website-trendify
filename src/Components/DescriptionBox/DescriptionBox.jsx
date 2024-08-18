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



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const DescriptionBox = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reviewTextString = `Here is my review of the iPhone 14 Pro Max after using it for a couple of weeks
    The iPhone 14 Pro Max is the most advanced and powerful smartphone that Apple has made.
    It offers a stunning design, a superb display, a pro-level camera system, and a 
    blazing-fast performance. It is not a cheap device, but it is worth every penny if you 
    are looking for the best of the best.
    Design: The iPhone 14 Pro Max has a sleek and elegant design that feels premium in the 
    hand. It has a flat 6.7-inch OLED display that covers almost the entire front of the 
    device, with a pill-shaped notch at the top that houses the Face ID sensors and the 
    selfie camera. The back of the device is made of textured matt glass that resists 
    fingerprints and scratches, and the frame is made of stainless steel that adds 
    durability and shine. The device comes in four beautiful colors: Space Black, Silver, 
    Gold, and Deep Purple. The iPhone 14 Pro Max also has an IP68 rating, which means it 
    can withstand water up to 6 meters deep for up to 30 minutes.`;

  return (
    <div className='descriptionbox'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Description" {...a11yProps(0)}  />
              <Tab label="Reviews" {...a11yProps(1)} />
              <Tab label="Write a review" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div className="decriptionbox-description">
          <CustomTabPanel value={value} index={0}>
            <p>The iPhone 14 Pro Max is the most advanced and powerful smartphone that Apple has made. 
              It offers a stunning design, a superb display, a pro-level camera system, and a blazing-fast 
              performance. It is not a cheap device, but it is worth every penny if you are looking for 
              the best of the best.
            </p>
            <br/>
            <p>Design: The iPhone 14 Pro Max has a sleek and elegant design that feels premium in the 
              hand. It has a flat 6.7-inch OLED display that covers almost the entire front of the device, 
              with a pill-shaped notch at the top that houses the Face ID sensors and the selfie camera. 
              The back of the device is made of textured matt glass that resists fingerprints and scratches, 
              and the frame is made of stainless steel that adds durability and shine. The device comes in 
              four beautiful colors: Space Black, Silver, Gold, and Deep Purple. The iPhone 14 Pro Max also 
              has an IP68 rating, which means it can withstand water up to 6 meters deep for up to 30 
              minutes.
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="customer-reviews-container">
              <div className="overall-review-bar">
                <ReviewBarLeft />
              </div>
              <div className="customer-reviews">
                <ReviewHeader />
                <div className="review-list-item-container">
                  <p className="top-reviews-text">Top reviews from India</p>
                  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ReviewListItem
                      avatar={avatar1}
                      userName="Pratik Chakrabarty"
                      reviewText={reviewTextString}
                    />
                    <ReviewListItem
                      avatar={avatar2}
                      userName="Vinay Sahal"
                      reviewText={reviewTextString}
                    />
                    <ReviewListItem
                      avatar={avatar3}
                      userName="Sayantan Sardar"
                      reviewText={reviewTextString}
                    />
                  </List>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Button variant="outlined">
              Write a product review
            </Button>
          </CustomTabPanel>
          </div>
        </Box>
    </div>
  )
}

export default DescriptionBox;
