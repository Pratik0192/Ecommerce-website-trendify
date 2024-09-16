import React, { Fragment, useState } from 'react'
import { Grid, Typography, Box, List, ListItem, colors } from '@mui/material';
import OverviewComponent from '../../Components/OverviewComponent/OverviewComponent';
import OrderAndReturn from '../../Components/OrderAndReturn/OrderAndReturn';
import ProfileComponent from '../../Components/ProfileComponent/ProfileComponent';
import OrderTracking from '../../Components/OrderTracking/OrderTracking';

const subtitleStyle = {
  fontSize:'12px',
  color:'#73818c',
  padding:'10px 0',
  textTransform:'uppercase'
}

const optionStyle = {
  fontSize:'15px',
  margin:'5px 0'
}

const selectedStyle = {
  margin:'-12px 0 0 -15px', 
  cursor:'pointer',
  color:'#03a685',
  fontWeight:'700',
  fontSize:'20px'
}

const AccountPage = () => {
  const [selectedItem, setSelectedItem] = useState("overview");

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <Fragment>
      <Typography sx={{fontSize:'18px', fontWeight:'700', marginLeft:'13.5%', marginTop:'5%'}}>
        Account
      </Typography>
      <Typography sx={{fontSize:'12px', fontWeight:'500', marginTop:'-4px', marginLeft:'13.5%', marginBottom:'15px'}}>
        Trendify User
      </Typography>
      <Grid container spacing={2} xs={12} md={9} sx={{margin:'auto',borderTop:'1px solid #d4d5d9'}}>
        <Grid item xs={12} md={2.5} sx={{borderRight:'1px solid #d4d5d9'}}>
          <List component="nav">
            <Box sx={{ padding:'0 10px 10px 0'}}>

            {/* Sidebar Links */}
              <Box sx={{borderBottom:'1px solid #d4d5d9'}}>
                <ListItem
                  sx={selectedItem === "overview" ? selectedStyle : {margin:'-12px 0 0 -15px', cursor:'pointer', color:'#282c3f', fontSize:'15px'}}
                  onClick={() => handleItemSelect("overview")}
                  
                >
                  <Typography style={{ padding:'10px 0 20px 0'}}>
                    Overview
                  </Typography>
                </ListItem>
              </Box>
              <Box sx={{borderBottom:'1px solid #d4d5d9', padding:'20px 0'}}>
                <Typography style={subtitleStyle}>
                  orders
                </Typography>
                <ListItem 
                  sx={selectedItem === "orders" ? selectedStyle : {margin:'-12px 0 0 -15px', cursor:'pointer', color:'#282c3f'}}
                  onClick={() => handleItemSelect("orders")}
                >
                  <Typography sx={optionStyle}>
                    Orders & Returns
                  </Typography>
                </ListItem>
              </Box>
              <Box sx={{borderBottom:'1px solid #d4d5d9', padding:'20px 0'}}>
                <Typography style={subtitleStyle}>
                  credits 
                </Typography>
                <Typography sx={optionStyle}>
                  Coupons
                </Typography>
                <Typography sx={optionStyle}>
                  Trendify Credit
                </Typography>
                <Typography sx={optionStyle}>
                  TrenCash
                </Typography>
              </Box>
              <Box sx={{padding:'20px 0'}}>
                <Typography style={subtitleStyle}>
                    account
                </Typography>
                <ListItem
                  sx={selectedItem === "accountPage" ? selectedStyle : {margin:'-12px 0 0 -15px', cursor:'pointer', color:'#282c3f'}}
                  onClick={() => handleItemSelect("accountPage")}
                >
                  <Typography sx={optionStyle}>
                    Profile
                  </Typography>
                </ListItem>
                <Typography sx={optionStyle}>
                  Saved Cards
                </Typography>
                <Typography sx={optionStyle}>
                  Addresses
                </Typography>
                <Typography sx={optionStyle}>
                  Saved Upi
                </Typography>
                <Typography sx={optionStyle}>
                  Delete Account
                </Typography>
              </Box>
            </Box>
          </List>
        </Grid>

      {/* Main Content */}
        <Grid item xs={12} md={9.5} container justifyContent="center" alignItems="center" >
          {selectedItem === 'overview' ? (
            <OverviewComponent />
          ) : selectedItem === 'orders' ? (
            <OrderAndReturn onTrackPackage={() => handleItemSelect('trackpackage')} />
          ) : selectedItem === 'accountPage' ? (
            <ProfileComponent />
          ) : selectedItem === 'trackpackage' ? (
            <OrderTracking />
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default AccountPage