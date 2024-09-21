import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {Link} from "react-router-dom";
import { AccountBalance, Money, CreditCard } from "@mui/icons-material";
import UPILogo from "../../Components/Assets/upi-logo.png"

// Importing Components
import CheckoutSteps from "../../Components/Checkout/CheckoutSteps/CheckoutSteps";
import OrderSummary from "../../Components/Checkout/OrderSummary/OrderSummary";
import PaymentCod from "./PaymentCod";
import PaymentUpi from "./PaymentUpi";
import PaymentCard from "./PaymentCard"
import PaymentNetbanking from "./PaymentNetbanking";


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Outfit, sans-serif',
      textTransform: 'none',
      fontSize: 14,
      zoom: 0.95
    }
  },
});

const OrderPayment = (props) => {
  const { hideNavbar } = props;
  const [selectedItem, setSelectedItem] = useState("cod");

  useEffect(() => {
    hideNavbar();
  }, [hideNavbar]);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const selectedStyle = {
    minHeight: "70px",
    borderLeft: "4px solid #FF4141",
    backgroundColor: "#fff",
  };

  return (
    <div>
      <CheckoutSteps activeStep={2} />
    <ThemeProvider theme={theme}>
      <Grid 
        container 
        spacing={2} 
        sx={{ 
          maxWidth: "100%", 
          minWidth: "100%",
          padding: "40px 200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography 
          sx={{ 
            fontSize: '18px', 
            color: '#282c3f', 
            fontWeight: '700',
            marginRight: "auto",
            marginLeft: "30px"
          }}
        >
          Choose Payment Mode
        </Typography>
        <Box sx={{ width: "100%" }} display="flex" flexDirection="row">
        <Grid
          item
          xs={7.5}
          container 
          spacing={2} 
          sx={{ 
            maxWidth: "800px", 
            marginTop: "16px", 
            marginLeft: "30px", 
            backgroundColor: "#fff", 
            borderRadius: "8px",
            minHeight: "500px",
          }}
        >
          
          {/* Left Section - Payment Options */}
          <Grid item xs={4.5} 
            sx={{
              border: "1px solid #ccc",
            }}
          >
            <List component="nav" sx={{ marginLeft: "-16px", marginTop: "-20px" }}>
              <ListItem
                disableRipple
                button
                onClick={() => handleItemSelect("cod")}
                sx={selectedItem === "cod" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
              >
                <ListItemIcon>
                  <Money />
                </ListItemIcon>
                <Typography sx={{fontSize:"15px", fontWeight: "600",color:"#424553"}}>
                  Cash On Delivery
                </Typography>
              </ListItem>
              <ListItem
                disableRipple
                button
                onClick={() => handleItemSelect("upi")}
                sx={selectedItem === "upi" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
              >
                <img src={UPILogo} alt="Axis Bank" width={50} height={50} style={{ marginRight: 8 }} />
                {/* <ListItemText primary="UPI (Pay via any App)" secondary="2 Offers" sx={{ color: "green" }} /> */}
                <Typography sx={{fontSize:"15px", fontWeight: "600",color:"#424553"}}>          
                  UPI (Pay via any App)
                </Typography>
              </ListItem>
              <ListItem
                disableRipple
                button
                onClick={() => handleItemSelect("card")}
                sx={selectedItem === "card" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
              >
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
                {/* <ListItemText primary="Credit/Debit Card" secondary="9 Offers" sx={{ color: "green" }} /> */}
                <Typography sx={{fontSize:"15px", fontWeight: "600",color:"#424553"}}>          
                  Credit/Debit Card
                </Typography>
              </ListItem>
              <ListItem
                disableRipple
                button
                onClick={() => handleItemSelect("netbanking")}
                sx={selectedItem === "netbanking" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
              >
                <ListItemIcon>
                  <AccountBalance />
                </ListItemIcon>
                {/* <ListItemText primary="Net Banking" /> */}
                <Typography sx={{fontSize:"15px", fontWeight: "600",color:"#424553"}}>          
                  Net Banking
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Right Section - Net Banking Options */}
          <Grid item xs={7.5} 
            sx={{
              border: "1px solid #ccc",
              padding: "30px 30px"
            }}
          >
            {
              selectedItem === "cod" ? 
                <PaymentCod /> : 
              selectedItem === "upi" ? 
                <PaymentUpi /> :
              selectedItem === "card" ? 
                <PaymentCard /> :
              selectedItem === "netbanking" ? 
                <PaymentNetbanking /> 
              : <div></div>
            }
            <Link to="/orderconfirmed">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff3f6c",
                  color: "#fff",
                  width: "96%",
                  marginTop: "16px",
                  marginLeft: "17px",
                  padding: "12px",
                  fontSize: "16px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#ff3f6c",
                    boxShadow: "none",
                  },
                }}
              >
                {selectedItem === "cod" ? "PLACE ORDER" : "PAY NOW"}
              </Button>
            </Link>
          </Grid>
        </Grid>
        
        <Grid item xs={3.5} sx={{marginLeft: "20px", marginTop: "16px"}}>
          <OrderSummary linkTo="/" displayButton={false} />
        </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
    </div>
  );
};

export default OrderPayment;
