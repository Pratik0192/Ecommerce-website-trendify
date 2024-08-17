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
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const ReviewBarLeft = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 0 }}>
      <div className="reviews-heading-text">Customer Reviews</div>
      <Rating name="read-only" value={4} size="large" readOnly />
      <Typography color="text.secondary" variant="body2">
        999 global ratings
      </Typography>
      <Stack sx={{ p: 0, marginTop: 3 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">5 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={80} />
        <Typography color="text.primary" variant="body2">80%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: 1 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">4 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={40} />
        <Typography color="text.primary" variant="body2">40%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: 1 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">3 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={30} />
        <Typography color="text.primary" variant="body2">30%</Typography>
      </Stack>
      <Stack sx={{ p: 0, marginTop: 1 }} direction="row" spacing={1}>
        <Typography color="text.primary" variant="body2">2 star</Typography>
        <BorderLinearProgress className="review-progress" variant="determinate" value={20} />
        <Typography color="text.primary" variant="body2">20%</Typography>
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
        <Button sx={{ width: '80%' }} variant="outlined" onClick={handleClickOpen}>
          Write a product review
        </Button>
        <ProductReviewDialog
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />
      </div>
    </Box>
  )
}

export default ReviewBarLeft;