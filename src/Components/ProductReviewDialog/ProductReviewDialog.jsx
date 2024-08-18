import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

const ProductReviewDialog = ({ open, handleClose, product}) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [headline, setHeadline] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Headline:', headline);
    console.log('Review:', reviewText);
    console.log('Selected File:', selectedFile);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="review-dialog-title"
      maxWidth="sm"
      fullWidth={true}
      sx={{
        '& .MuiDialog-paper': {
          width: '80%',
          maxHeight: '80vh',
        },
      }}
    >
      <DialogTitle id="review-dialog-title"
        sx={{
          fontSize: '22px',
          fontWeight: '600'
        }}
      >
        Create Review
      </DialogTitle>

      <DialogContent>
      <Divider sx={{ marginTop: 2, marginBottom: 2, width: '100%' }} />
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
      {product && (
          <img
            src={product.image}
            alt="Product"
            style={{maxHeight: '75px', objectFit: 'contain' }}
          />
        )}
      {product && (
        <Typography
          variant='h6'
          sx={{marginLeft: 2, fontSize: '14px'}}
        >
          {product.name}
        </Typography>
      )}
      </Box>
        
      <Divider sx={{ marginTop: 2, marginBottom: 2, width: '100%' }} />
        <Typography component="legend" mb={1}
            sx={{ fontSize: '16px', fontWeight: '700' }}
          >
            Overall Rating
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{
              fontSize: '30px',
              color: '#ff4141'
            }}
          />
          <Divider sx={{ marginTop: 2, marginBottom: 2, width: '100%' }} />

        {/*headline section*/}
        <Typography component="legend" mb={1}
          sx={{ fontSize: '15px', fontWeight: '700' }}
        >
            Add a headline
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            size='small'
            id="headline"
            label={headline ? '' : "What's most important to know?"}
            type="text"
            fullWidth
            multiline
            rows={1}
            variant="outlined"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            onFocus={() => setHeadline(headline ? setHeadline : '')}
            onBlur={() => !headline && setHeadline('')}
            InputProps={{
              sx: {
                fontSize: '14px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff4141',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff4141',
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: '14px',
                '&.Mui-focused': {
                  color: '#ff4141',
                },
              },
            }}
          />
          <Divider sx={{ marginTop: 2, marginBottom: 2, width: '100%' }} />

        {/* Add Photo/Video Section */}
          <Typography component="legend" 
          sx={{ fontSize: '15px', fontWeight: '700' }} mb={1}
          >
            Add a photo or video
          </Typography>
          <Typography component="p" sx={{ fontSize: '11px', color: 'gray' }}>
          Shoppers find images and videos more helpfull than text alone.
        </Typography>
          <input
            accept="image/*,video/*"
            style={{ display: 'none' }}
            id="upload-file"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="upload-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera sx={{
                color: '#ff4141',
                fontSize: '40px'
              }}
              />
            </IconButton>
          </label>
          {selectedFile && <Typography ml={2}>{selectedFile.name}</Typography>}
          <Divider sx={{ marginTop: 3, marginBottom: 2, width: '100%' }} />
  

        {/*detailed review section*/}
        <Typography component="legend" mb={1}
        sx={{ fontSize: '15px', fontWeight: '700' }}
        >
            Add a written review
          </Typography>
        <TextField
          margin="dense"
          size='small'
          id="review"
          label={reviewText ? '' : "What did you like or dislike? What did you used this product for?"}
          type="text"
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          onFocus={() => setReviewText(reviewText ? reviewText : '')}
          onBlur={() => !reviewText && setReviewText('')}
          InputProps={{
            sx: {
              fontSize: '14px',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff4141', // Border color on hover
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff4141', // Border color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: '14px',
              '&.Mui-focused': {
                color: '#ff4141', // Label color when focused
              },
            },
          }}
        />
        <Divider sx={{ marginTop: 2, width: '100%' }} />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained" color="primary"
          sx={{
            color: '#fff',
            background: '#ff4141',
            marginBottom: '30px',
            marginRight: '30px',
            marginTop: '0px'
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductReviewDialog;
