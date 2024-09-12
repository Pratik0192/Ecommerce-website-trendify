import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AccountBalance, Money, CreditCard } from "@mui/icons-material";
import UPILogo from "../Assets/upi-logo.png"

// Importing Components
import ShippingAmount from "../ShippingAmount/ShippingAmount";
import Cod from "./Cod";
import Upi from "./Upi";
import Card from "./Card"
import Netbanking from "./Netbanking";


const PaymentMode = () => {
  const [selectedItem, setSelectedItem] = useState("netbanking");

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const selectedStyle = {
    minHeight: "70px",
    borderLeft: "4px solid #FF4141",
    backgroundColor: "#fff",
  };

  return (
    <Grid 
      container 
      spacing={2} 
      sx={{ 
        maxWidth: "100%", 
        minWidth: "100%",
        padding: "40px 100px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Grid
        xs={7.5}
        container 
        spacing={2} 
        sx={{ 
          maxWidth: "800px", 
          marginTop: "16px", 
          marginLeft: "30px", 
          backgroundColor: "#fff", 
          borderRadius: "8px",
          minHeight: "500px"
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
              button
              onClick={() => handleItemSelect("cod")}
              sx={selectedItem === "cod" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
            >
              <ListItemIcon>
                <Money />
              </ListItemIcon>
              <ListItemText primary="Cash On Delivery" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemSelect("upi")}
              sx={selectedItem === "upi" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
            >
              <img src={UPILogo} alt="Axis Bank" width={50} height={50} style={{ marginRight: 8 }} />
              <ListItemText primary="UPI (Pay via any App)" secondary="2 Offers" sx={{ color: "green" }} />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemSelect("card")}
              sx={selectedItem === "card" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
            >
              <ListItemIcon>
                <CreditCard />
              </ListItemIcon>
              <ListItemText primary="Credit/Debit Card" secondary="9 Offers" sx={{ color: "green" }} />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemSelect("netbanking")}
              sx={selectedItem === "netbanking" ? selectedStyle : {minHeight: "70px",backgroundColor: "#eee"}}
            >
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary="Net Banking" />
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
            <Cod /> : 
          selectedItem === "upi" ? 
            <Upi /> :
          selectedItem === "card" ? 
            <Card /> :
          selectedItem === "netbanking" ? 
            <Netbanking /> 
          :
          <div></div>
        }
        </Grid>
      </Grid>
      <Grid xs={3.5} sx={{marginLeft: "20px", marginTop: "16px"}}>
        <ShippingAmount />
      </Grid>
    </Grid>
  );
};

export default PaymentMode;
