import React, { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, TextField,
  Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, IconButton,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Placeholder from '../Assets/profile_placeholder.png';

const ProfileComponent = () => {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const textFieldActiveStateStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#555", // Change the border color when focused
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#555", // Change label color when focused
      },
    },
  };

  const profileDetailContainer = { 
    margin: '20px 10px',
    display:'flex'
  }

  const profileDetailLeft={
    fontWeight: '500',
    width:'300px', 
    fontSize:'16px',
    marginLeft:'90px'
  }

  const profileDetailRight={
    fontWeight: '500', 
    width:'250px', 
    fontSize:'16px',
    marginLeft:'-25px'
  }

  return (
    <Box sx={{ padding: '20px', width:'90%'}}>
      {/* Profile Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          marginBottom: '15px',
          marginLeft:'-21px',
          width: '100%',
          padding:'10px 20px 10px 20px'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <img src={Placeholder} alt="Placeholder" height="150px" style={{ margin: '10px' }} />
        </Box>
        <Button
          variant="outlined"
          disableRipple
          sx={{
            textTransform: 'none',
            color: '#333',
            marginRight:'20px',
            padding:'10px 30px',
            borderColor: '#333',
            '&:hover': { backgroundColor: '#e0e0e0', borderColor:'#333' },
          }}
          onClick={handleClickOpen}
        >
          Edit Profile
        </Button>
      </Box>

      {/* Profile Details Section */}
      <Box 
        sx={{ 
          marginLeft:'-21px',
          paddingBottom:'40px',
          padding:'20px -1px 200px 119px',
          width:'105%',
          border:'1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <Typography sx={{ fontWeight: '700',marginTop:'15px', marginBottom: '20px',marginLeft:'80px',fontSize:'22px' }}>
          Profile Details 
        </Typography>
        <Divider sx={{marginBottom: '40px'}}/>
        {/* Full Name */}
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Full Name: 
          </Typography>
          <Typography sx={profileDetailRight}>
            {fullName || "- not added -"}
          </Typography>
        </Box>
        {/* Mobile Number */}
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Mobile Number: 
          </Typography>
          <Typography sx={profileDetailRight}>
            {mobileNumber || "- not added -"}
          </Typography>
        </Box>
        {/* Email */}
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Email ID: 
          </Typography>
          <Typography sx={profileDetailRight}>
            {email || "- not added -"}
          </Typography>
        </Box>
        {/* Gender */}
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Gender: 
          </Typography>
          <Typography sx={profileDetailRight}>
          {gender || "- not added -"}
            </Typography>
        </Box>
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Date of Birth: 
          </Typography>
          <Typography sx={profileDetailRight}>
          { "- not added -"}
            </Typography>
        </Box>
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Alternate Mobile Number: 
          </Typography>
          <Typography sx={profileDetailRight}>
          {"- not added -"}
            </Typography>
        </Box>
        <Box sx={profileDetailContainer}>
          <Typography variant="subtitle1" sx={profileDetailLeft}>
            Location: 
          </Typography>
          <Typography sx={profileDetailRight}>
          {"- not added -"}
            </Typography>
        </Box>

      </Box>

      {/* Dialog for Edit Profile */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Edit Details
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box sx={{ padding: '20px' }}>
          <Box sx={{ marginBottom: '20px', ...textFieldActiveStateStyle }}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Box>

          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '20px', ...textFieldActiveStateStyle }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '20px', ...textFieldActiveStateStyle }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl component="fieldset" sx={{ marginBottom: '20px', ...textFieldActiveStateStyle }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="male" control={<Radio sx={{ "&.Mui-checked": { color: "#FF4141" } }} />} label="Male" />
              <FormControlLabel value="female" control={<Radio sx={{ "&.Mui-checked": { color: "#FF4141" } }} />} label="Female" />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            disableRipple
            fullWidth
            sx={{
              backgroundColor: '#ff3f6c',
              color: '#fff',
              "&:hover": {
                backgroundColor: "#ff3f6c",
                boxShadow: "none",
              },
            }}
            onClick={handleClose}
          >
            Save Details
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ProfileComponent;