import React, { useState } from 'react';
import './ReviewBarLeft.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ProductReviewDialog from '../ProductReviewDialog/ProductReviewDialog';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: 200,
  height: 15,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#ff4141' : '#308fe8',
  },
}));

const ReviewBarLeft = ({product}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonStyle = { 
    width: '80%', 
    color: '#ff4141', 
    borderColor: '#ff4141', 
    '&:hover': { borderColor: '#ff4141'}, 
  };

  return (
    <Box sx={{ p: 0 }}>
      <div className="reviews-heading-text">Customer Reviews</div>
      <div className="rating-rating-no">
        <Rating name="read-only" value={4} size="large" readOnly sx={{color: '#ff4141'}} />
        <Typography color="text.primary" variant="body1">4 out of 5</Typography>
      </div>
      <Typography color="text.secondary" variant="body2">999 global ratings</Typography>
      <Stack sx={{ p: 0, marginTop: 3 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">5 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={47}/>
        <Typography color="text.primary" variant="body2">47%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: 1 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">4 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={60} />
        <Typography color="text.primary" variant="body2">60%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: 1 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">3 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={30} />
        <Typography color="text.primary" variant="body2">30%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: 1 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">2 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={4} />
        <Typography color="text.primary" variant="body2">4%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: '5px' }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">1 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={10} />
        <Typography color="text.primary" variant="body2">10%</Typography>
      </Stack>
      <Divider sx={{ marginTop: 3, marginBottom: 2, width: '80%' }} />
      <div className="review-this-product">
        <p>Review this product</p>
        <span>Share your thoughts with other customers</span>
        <Button 
          sx={buttonStyle} 
          variant="outlined" 
          onClick={handleClickOpen}
        >
          Write a product review
        </Button>
        <ProductReviewDialog
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          product={product}
        />
      </div>
    </Box>
  )
}

export default ReviewBarLeft;