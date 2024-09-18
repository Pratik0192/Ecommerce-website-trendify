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
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import OrderCancelReason from '../OrderCancelReason/OrderCancelReason';

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

const OrderTracking = ({onReturnReason}) => {
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
    <Grid container sx={{background: '#f5f5f6', justifyContent: 'center' }}>
      {/* image section */}
      <Grid item xs={12} md={12} sx={{ justifyContent: 'center', textAlign: 'center', paddingTop:'80px' }}>
        <img src={trial_image_return} alt="Product" style={{ width: '120px' }} />
      </Grid>

      {/* Product Details */}
      <Grid item xs={12} md={12} sx={{ justifyContent: 'center', textAlign: 'center', marginBottom:'30px' }}>
        <Box>
          <Typography sx={{fontSize:'15px', fontWeight:'700', marginTop:'20px', marginBottom:'5px', color:'#282c3f'}}>Roadster</Typography>
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

      {/* cancel order part */}
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
          <Button
            onClick={onReturnReason}  
          >
            <CancelIcon sx={{color:'#03a685', fontSize:'26px'}} />
          </Button>
          <Typography >
            Cancel
          </Typography>
        </Box>
      </Grid>

      {/* Delivery address part */} 
      <Grid xs={12} md={11} sx={{backgroundColor:'#ffffff', marginBottom:'30px'}}>
        <Box sx={{padding:'20px'}}>
          <Typography sx={{color:'#282c3f', fontSize:'16px', fontWeight:'700', marginBottom:'10px'}}>Delivery Address</Typography>
          <Typography sx={{color:'#282c3f', fontSize:'14px', fontWeight:'700'}}>Pratik Chakraborty <span>7595029561</span></Typography>
          <Typography sx={{color:'#7e818c', fontSize:'14px', marginBottom:'10px'}}>1/1A, Kedar Nath Das Lane, Kolkata-70030</Typography>
          <Button
            variant='outlined'
            sx={{
              width:'100%',
              padding:'10px 0px',
              color:'#282c3f',
              border:'1px solid #282c3f',
              fontWeight:'700',
              '&:hover':{
                color:'#282c3f',
                border:'1px solid #282c3f',
                background:'#ffffff'
              }
            }}
          >
            Change Delivery Address
          </Button>
        </Box>
      </Grid >

      {/* total price part */}
      <Grid xs={12} md={11} sx={{backgroundColor:'#ffffff', marginBottom:'30px'}}>
        <Box sx={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
          <Typography sx={{fontSize:'16px',color:'#282c3f', fontWeight:'700', }}>
            Total Order Price
          </Typography>
          <Typography sx={{fontSize:'16px',color:'#282c3f',fontWeight:'700'}}>
            Rs.599
          </Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', padding:'20px',marginTop:'-38px'}}>
          <Typography sx={{fontSize:'14px',color:'#7e818c'}}>
            You Saved <span style={{fontWeight:'700', color:'#03a685'}}>Rs.629</span> on this order
          </Typography>
          <Typography sx={{fontSize:'15px', color:'#ff3f6c', fontWeight:'700'}}>
            View Breakup
          </Typography>
        </Box>
        <Grid xs={12} md={11.5} sx={{backgroundColor:'#f5f5f6', margin:'auto', padding:'20px', marginBottom:'20px'}}>
          <Typography sx={{fontSize:'16px', color:'#7e818c'}}>
            <span><PaymentsOutlinedIcon sx={{fontSize:'20px', marginBottom:'-5px', marginRight:'5px'}}/></span>
            Pay on Delivery
          </Typography>
        </Grid>
      </Grid>

      {/* updates sending part */}
      <Grid xs={12} md={11} sx={{background:'#ffffff', padding:'20px', marginBottom:'30px'}}>
        <Box>
          <Typography sx={{fontSize:'16px', color:'#282c3f', fontWeight:'700', marginBottom:'10px'}}>
            Updates send to
          </Typography>
          <Typography sx={{fontSize:'14px', color:'#7e818c', marginBottom:'10px'}}>
            <span><LocalPhoneOutlinedIcon sx={{fontSize:'20px', marginBottom:'-5px', marginRight:'5px'}}/></span>
            7595029561
          </Typography>
          <Typography sx={{fontSize:'14px', color:'#7e818c'}}>
            <span><EmailOutlinedIcon sx={{fontSize:'20px', marginBottom:'-5px', marginRight:'5px'}}/></span>
            pratikchakraborty019gmail.com
          </Typography>
        </Box>
      </Grid>

      {/* order id part */}
      <Grid xs={12} md={11} sx={{background:'#ffffff', padding:'20px', marginBottom:'30px'}}>
        <Typography sx={{fontSize:'14px', color:'#7e818c'}}>
          Order ID # 408-8465956-2312333
        </Typography>
      </Grid>
      
    </Grid>
  );
};

export default OrderTracking;
