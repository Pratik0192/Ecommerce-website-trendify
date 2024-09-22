import React, { useState } from 'react';
import { Box, Typography, Button, Dialog } from '@mui/material';
import Iconcard_empty from '../Assets/iconcard_empty.PNG';
import DialogSavedCards from './DialogSavedCards';
import Sponsor_image from '../Assets/Sponsor_images.PNG'

const CardsEmptyPlaceholder = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '-15px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
      }}
    >
      <img
        src={Iconcard_empty}
        alt="Cards Placeholder"
        style={{ width: '50%', marginTop: '-85px', borderRadius: '2px', boxShadow: '1px solid #333' }}
      />
      <Typography
        variant="h6"
        sx={{ fontWeight: '600', color: '#000000', marginTop: '15px' }}
      >
        Save your credit/debit cards during payment
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: '#7e818c', marginBottom: '70px', marginTop: '20px' }}
      >
        It's convenient to pay with saved cards.
        Your card information will be secure, we use 128-bit encryption
      </Typography>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'uppercase',
          color: '#526cd0',
          borderColor: '#d4d5d9',
          fontWeight: 'bold',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: 'white',
            borderColor: '#d4d5d9',
          },
        }}
        onClick={handleOpenDialog}
      >
        + ADD NEW CARD
      </Button>

      {/* MYNTRA SECURED LINE */}
      <Box // Add a Box for the line
        sx={{
          width: '80%', 
          height: '1px',
          backgroundColor: '#d4d5d9', 
          marginTop: '50px',
        }}
      >
        <Typography // Center the text within the line
          variant="caption"
          sx={{
            position: 'relative',
            top: '-10px', 
            backgroundColor: 'white',
            padding: '0 5px', 
            color: '#7e818c', 
          }}
        >
          TRENDIFY SECURED
        </Typography>
      </Box>

      <img
        src={Sponsor_image}
        alt="Sponsor Placeholder"
        style={{ width: '50%', marginTop: '10px'}}
      />
        
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogSavedCards />
      </Dialog>
    </Box>
  );
};

export default CardsEmptyPlaceholder;