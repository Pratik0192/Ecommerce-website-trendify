import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./CheckoutSteps.css";
import { Link } from "react-router-dom";
import { StepButton } from "@mui/material";

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

  return (
    <div style={{ boxShadow: "0 1px 3px -2px black", paddingBottom: "16px" }}>
    <Box
      sx={{
        width: "80%",
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
    </div>
  );
};

export default CheckoutSteps;