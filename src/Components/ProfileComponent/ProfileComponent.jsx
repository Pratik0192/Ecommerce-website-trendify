import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ProfileComponent = ({ name, mobileNumber, email, gender }) => {
  return (
    <Box sx={{ padding: '80px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Avatar sx={{ mr: 2 }}>V</Avatar>
        <Typography variant="h5" sx = {{fontSize:"30px"}}>
          Profile Details
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
          Full Name:
        </Typography>
        <Typography>{name || "N/A"}</Typography>
      </Box>

      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
          Mobile Number:
        </Typography>
        <Typography>{mobileNumber || "N/A"}</Typography>
      </Box>

      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
          Email:
        </Typography>
        <Typography>{email || "N/A"}</Typography>
      </Box>

      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
          Gender:
        </Typography>
        <Typography>{gender || "N/A"}</Typography>
      </Box>
    </Box>
  );
};

export default ProfileComponent;