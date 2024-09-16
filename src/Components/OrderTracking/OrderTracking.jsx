import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import trial_image_return from '../Assets/product_10.png';
import CancelIcon from '@mui/icons-material/Cancel';

// Define a custom connector with no underline
const CustomStepConnector = styled('div')({
  height: 24,
  width: 1,
  marginLeft:'22px',
  backgroundColor: '#bdbdbd',
});

const steps = [
  {
    label: 'ORDERED',
    description: 'Order Placed on 13 Sep',
  },
  {
    label: 'SHIPPED',
    description: 'by Tue, 14 Sep',
  },
  {
    label: 'OUT FOR DELIVERY',
    description: 'on 15 Sep',
  },
  {
    label: 'ORDER DELIVERED',
    description: 'on 15 Sep',
  },
];

const OrderTracking = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container sx={{background: '#eaeaec', justifyContent: 'center' }}>
      {/* Image Section */}
      <Grid item xs={12} md={12} sx={{ justifyContent: 'center', textAlign: 'center', paddingTop:'80px' }}>
        <img src={trial_image_return} alt="Product" style={{ width: '120px' }} />
      </Grid>

      {/* Product Details */}
      <Grid item xs={12} md={12} sx={{ justifyContent: 'center', textAlign: 'center', marginBottom:'30px' }}>
        <Box>
          <Typography sx={{fontSize:'15px', fontWeight:'700', marginTop:'20px', marginBottom:'5px'}}>Roadster</Typography>
          <Typography sx={{fontSize:'14px', marginBottom:'5px', color:'#7e818c'}}>Men solid round neck t-shirt</Typography>
          <Typography sx={{fontSize:'14px', color:'#7e818c'}}>Size: S</Typography>
        </Box>
      </Grid>

      {/* Stepper Section */}
      <Grid item xs={12} md={11} sx={{ background: '#ffffff', marginTop: '20px', padding: '10px' }}>
        <Box>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            connector={<CustomStepConnector />}
            sx={{
              '& .MuiStepIcon-root': {
                fontSize:'12px',
                marginLeft:'6px',
                '& .MuiStepIcon-text': {
                  display: 'none', // Hide the text inside the step icon
                },
              },
              '& .Mui-active .MuiStepIcon-root': {
                color: '#ffffff', // Color for active step
              },
              '& .Mui-completed .MuiStepIcon-root': {
                color: '#03a685', // Color for completed steps
              },
            }}
          >
            {steps.map((step, index) => (
              <Step
                key={step.label}
                sx={{
                  backgroundColor: activeStep === index ? '#03a685' : '#ffffff',
                  color: activeStep === index ? '#ffffff' : '#000000',
                  padding:'10px 20px',
                  marginLeft:'-10px',
                  marginRight:'-10px'
                }}
              >
                <StepLabel
                  sx={{
                    '& .MuiStepLabel-label': {
                      fontSize: activeStep === index ? '13px' : '12px', // Adjust font size here
                      fontWeight: activeStep === index ? '700' : '300', // Optional: make active step bold
                      color: activeStep === index ? '#ffffff' : '#000000', // Label color
                    },
                  }}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography sx={{fontSize:'12px'}}>{step.description}</Typography>
                  {/* <Box>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        disabled={index === steps.length - 1}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box> */}
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {/* Reset Button */}
          {activeStep === steps.length && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset} sx={{ mt: 2 }}>
                Reset
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
      <Grid xs={12} md={11} 
        sx={{ 
          background: '#ffffff', 
          marginTop: '30px', 
          marginBottom: '30px', 
          padding: '10px', 
          justifyContent:'center', 
          textAlign:'center',
          padding:'15px 0px'
        }}
      >
        <Box>
          <CancelIcon sx={{color:'#03a685', fontSize:'26px'}} />
          <Typography >
            Cancel
          </Typography>
        </Box>
        
      </Grid>
    </Grid>
  );
};

export default OrderTracking;
