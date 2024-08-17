import React, { useState } from 'react'
import './DescriptionBox.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Rating from '@mui/material/Rating';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


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

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [ratingValue, setRatingValue] = useState(2);

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="submit-rating-dialog">
        <DialogTitle>Create Review</DialogTitle>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
        />
        <Button variant="outlined">Write a product review</Button>
      </div>
    </Dialog>
  );
}


const DescriptionBox = () =>{
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    //setSelectedValue(value);
  };

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
            <p>The iPhone 14 Pro Max is the most advanced and powerful smartphone that Apple has made. It offers a stunning design, a superb display, a pro-level camera system, and a blazing-fast performance. It is not a cheap device, but it is worth every penny if you are looking for the best of the best.</p>
            <br/>
            <p>Design: The iPhone 14 Pro Max has a sleek and elegant design that feels premium in the hand. It has a flat 6.7-inch OLED display that covers almost the entire front of the device, with a pill-shaped notch at the top that houses the Face ID sensors and the selfie camera. The back of the device is made of textured matt glass that resists fingerprints and scratches, and the frame is made of stainless steel that adds durability and shine. The device comes in four beautiful colors: Space Black, Silver, Gold, and Deep Purple. The iPhone 14 Pro Max also has an IP68 rating, which means it can withstand water up to 6 meters deep for up to 30 minutes.</p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="customer-reviews-container">
              <div className="overall-review-bar">
                <h3>Customer reviews</h3>
                <Rating name="read-only" value={4} readOnly />
                <BorderLinearProgress className="review-progress" variant="determinate" value={80} />
                <BorderLinearProgress className="review-progress" variant="determinate" value={50} />
                <BorderLinearProgress className="review-progress" variant="determinate" value={30} />
                <BorderLinearProgress className="review-progress" variant="determinate" value={20} />
                <BorderLinearProgress className="review-progress" variant="determinate" value={10} />
              </div>
              <div className="customer-reviews"></div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Write a product review
            </Button>
            <SimpleDialog
              open={open}
              onClose={handleClose}
            />
          </CustomTabPanel>
          </div>
        </Box>
    </div>
  )
}

export default DescriptionBox
