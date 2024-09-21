import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddressDialog from '../Checkout/AddressDialog/AddressDialog';
import ProfileAddressLocation from '../Assets/profileAddressLocation.jpg';

const AddressEmptyPlaceholder = ({ onAddressSaved }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddressSaved = (newAddress) => {
    // Pass the newly saved address to the parent component
    onAddressSaved(newAddress);
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
        src={ProfileAddressLocation}
        alt="Profile Address Placeholder"
        style={{ width: '50%', marginTop: '-85px', borderRadius: '2px', boxShadow: '1px solid #333' }}
      />
      <Typography
        variant="h6"
        sx={{ fontWeight: '600', color: '#000000', marginTop: '15px' }}
      >
        SAVE YOUR ADDRESSES NOW
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: '#7e818c', marginBottom: '70px', marginTop: '20px' }}
      >
        Add your home and office addresses and enjoy faster checkout
      </Typography>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'uppercase',
          color: '#526cd0',
          borderColor: '#d4d5d9',
          fontWeight: 'bold',
          padding: '10px 20px',
          "&:hover": {
            backgroundColor: 'white',
            borderColor: '#d4d5d9',
          },
        }}
        onClick={handleOpenDialog}
      >
        + ADD NEW ADDRESS
      </Button>

      {/* AddressDialog Component */}
      <AddressDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        onSave={handleAddressSaved} // Callback when address is saved
      />
    </Box>
  );
};

export default AddressEmptyPlaceholder;

