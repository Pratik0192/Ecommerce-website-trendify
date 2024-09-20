import React from "react";
import "./CheckoutSteps.css";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { StepButton } from "@mui/material";
import logo from '../../Assets/logo.png';


const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Address</Typography>,
      icon:  <LocalShippingIcon />,
    },
    {
      label: <Typography>Review Order</Typography>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <Typography>Payment Info</Typography>,
      icon: <AccountBalanceIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  const navbarIconStyleLeft = { 
    width: "150px", 
    height: "50px",
    marginTop: "15px",
    marginLeft: "30px"
  };

  const navbarIconStyleRight = {
    width: "150px",
    height: "50px", 
    marginTop: "15px",
    marginRight: "30px"
  };

  return (
    <Box 
      display="flex"
      flexDirection="row"
      alignItems="center" 
      sx={{ boxShadow: "0 1px 3px -2px black", paddingBottom: "16px" }}
    >
      <Box sx={navbarIconStyleLeft}>
        <img src={logo} width="50px" height="50px" alt="Logo" />
      </Box>
      <Box
        sx={{
          width: "65%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
          {steps.map((item, index) => (
            <Step
              key={index}
              active={activeStep === index ? true : false}
              completed={activeStep >= index ? true : false}
            >
              <StepButton
                style={{
                  color: activeStep >= index ? "#ff3f6c" : "#555",
                }}
                icon={item.icon}
              >
                <Box sx={{ 
                  marginTop:"-12px", 
                  color: activeStep >= index ? "#ff3f6c" : "#555" 
                }}>
                  {item.label}
                </Box>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box 
        display="flex" 
        flexDirection="row" 
        alignItems="center" 
        justifyContent="center" 
        sx={navbarIconStyleRight}
      >
        <img 
          src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" 
          width="36px" height="36px" alt="Secure"
        />
        <Typography sx={{ marginLeft: "5px" }}>100% SECURE</Typography>
      </Box>
    </Box>
  );
};

export default CheckoutSteps;