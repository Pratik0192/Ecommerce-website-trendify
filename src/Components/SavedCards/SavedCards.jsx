import React, { useState } from 'react';
import { Box, Typography, Radio, Button, Dialog, TextField, InputAdornment } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardsEmptyPlaceholder from './CardsEmptyPlaceholder';
import DialogSavedCards from './DialogSavedCards';

const SavedCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'SBI Debit Card',
      last4Digits: '0000',
      cardHolder: 'Vinay Sahal'
    },
    {
      id: 2,
      name: 'PNB Credit Card',
      last4Digits: '0000',
      cardHolder: 'Pratik Chakraborty'
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleRadioChange = (id) => {
    setSelectedCardId(id); // Set the selected card's ID
  };

  const textFieldActiveStateStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#555",
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#555",
      },
    },
  };

  return cards.length > 0 ? (
    <Box 
      sx={{ 
        padding: '20px', 
        marginBottom: '70px',
        marginTop: '-200px',
        marginRight:'410px',
        width: '40%',
        padding: '10px 20px 10px 20px'
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '20px', fontSize: "18px", fontWeight: "600" }}>
        Pay Using Saved Cards
      </Typography>

      {/* Wrap cards.map inside a fragment */}
      {cards.map((card) => (
        <Box
          key={card.id}
          onClick={() => handleRadioChange(card.id)}  // Add onClick to the whole Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            backgroundColor: '#fff',
            marginBottom: '10px',
            cursor: 'pointer',
            "&:hover":{
              boxShadow: "0px 3px 9px 3px rgba(212, 213, 217, 0.5)",
            }
          }}
        >
          <Radio
            checked={selectedCardId === card.id} // Check if this card is selected
            onChange={() => handleRadioChange(card.id)} // Set this card as selected when clicked
            sx={{ "&.Mui-checked": { color: "#FF4141" } }}
          />
          <Box sx={{ flexGrow: 1, marginLeft: '10px' }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {card.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#7e818c' }}>
              **** {card.last4Digits}
            </Typography>
            <Typography variant="body2" sx={{ color: '#7e818c' }}>
              {card.cardHolder}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label="CVV"
              placeholder="CVV"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CreditCardIcon />
                  </InputAdornment>
                )
              }}
              sx={{ width: '100px', ...textFieldActiveStateStyle }}
              onClick={(e) => e.stopPropagation()} // Prevent click on the TextField from triggering the box click
            />
          </Box>
        </Box>
      ))}

      <Button
        variant="outlined"
        sx={{ marginTop: '20px', textTransform: 'uppercase', color: '#526cd0', borderColor: '#d4d5d9', fontWeight: 'bold' }}
        onClick={handleOpenDialog} // Open dialog when button is clicked
      >
        + Add New Card
      </Button>

      {/* Dialog for adding new card */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogSavedCards onClose={handleCloseDialog} /> {/* Use the dialog component */}
      </Dialog>
    </Box>
  ) : (
    <CardsEmptyPlaceholder />
  );
};

export default SavedCards;