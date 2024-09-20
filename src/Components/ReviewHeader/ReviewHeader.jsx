import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';


const ReviewHeader = () => {
  return (
    <Box sx={{ p: 0 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom sx={{ fontSize: "25px", marginTop: "-20px" }}>
            What Customers Say
          </Typography>
        </Stack>
        <Typography color="text.primary" variant="body2">
          Customers like the performance, battery life, and quality of the cellular phone. 
          They mention that it runs at high speeds for longer without draining the battery, 
          has a powerful processor, and high-quality cameras. They also like the island, appearance, 
          and clarity. That said, opinions are mixed on camera quality and value.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2" sx={{ marginBottom: 2 }}>
          Select to learn more
        </Typography>
        <Stack direction="row" spacing={1}>
          {/* <Chip color="primary" label="Soft" size="small" /> */}
          <Chip icon={<VerifiedIcon />} label="Quality" size="medium" />
          <Chip icon={<VerifiedIcon />} label="Battery Life" size="medium" />
          <Chip icon={<VerifiedIcon />} label="Performance" size="medium" />
          <Chip icon={<VerifiedIcon />} label="Clarity" size="medium" />
          <Chip icon={<VerifiedIcon />} label="Appearance" size="medium" />
          <Chip icon={<VerifiedIcon />} label="Island" size="medium" />
          <Chip icon={<VerifiedIcon />} label="Camera Quality" size="medium" />
        </Stack>
      </Box>
      <Divider sx={{ marginTop: 1, marginBottom: 2 }}/>
    </Box>
  )
}

export default ReviewHeader;