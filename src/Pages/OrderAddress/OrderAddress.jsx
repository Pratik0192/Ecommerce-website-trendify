import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, Box, Radio } from "@mui/material";
import OrderSummary from "../../Components/Checkout/OrderSummary/OrderSummary";
import AddressForm from "../../Components/Checkout/AddressForm/AddressForm";
import AddressDialog from "../../Components/Checkout/AddressDialog/AddressDialog";
import CheckoutSteps from "../../Components/Checkout/CheckoutSteps/CheckoutSteps";
import { useSelector } from "react-redux";


/* const savedAddressesObj = [
  {
    name: "Pratik Chakraborty",
    type: "Home",
    address: "1/1A, Kedar Nath Das Lane, Kolkata, West Bengal - 700030",
    mobile: "7595029561",
    codAvailable: false,
  },
  {
    name: "Swetabja Hazra",
    type: "Office",
    address: "1/1A, Godrej Prakriti, Kolkata, West Bengal - 700030",
    mobile: "7595029561",
    codAvailable: false,
  },
  {
    name: "Sayantan Sardar",
    type: "Home",
    address: "1/1A, Godrej Prakriti, Kolkata, West Bengal - 700030",
    mobile: "7595029561",
    codAvailable: false,
  }
]; */

const OrderAddress = (props) => {
  const { hideNavbar } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  // const [selectedValue, setSelectedValue] = useState(savedAddressesObj[0].name);
  const savedAddressesObj = useSelector((store) => store.user.userData.address);
  const [savedAddresses, setSavedAddresses] = useState(savedAddressesObj);

  useEffect(() => {
    hideNavbar();
  }, [hideNavbar]);

  useEffect(() => {
    if(savedAddresses.length > 0){
      setSelectedValue(savedAddresses[0].contactName);
    }
  }, [savedAddresses]);

  // const handleChange = (event,name) => {
  //   // console.log("radio button")
  //   // console.log("Selected Name:", name);
  //   setSelectedValue(event.target.value);
  // };

  const handleSelectAddress = (name) => {
    console.log("Selected Name:", name);
    setSelectedValue(name);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  const savedAddressStyle = {
    fontSize: '13px',
    color: '#424553',
    marginLeft: '25px',
  };

  const addressButtonStyle = {
    fontWeight:"700",
    color:'#ff3f6c',
    fontSize:'16px',
    textTransform: 'uppercase',
    marginLeft:'-8px',
    width:'101%',
    borderRadius: '4px',
    paddingLeft:'10px',
    paddingRight:"70%",
    paddingTop:'18px',
    paddingBottom:'18px',
    // border: '1px solid #d4d5d9',
    border: '1px dashed #d4d5d9',
    marginTop:'15px',
    '&:hover': {
      border: '1px dashed #d4d5d9',
      // borderColor: '#d4d5d9',
      backgroundColor: '#ffffff',
    },
  };

  const buttonStyle = {
    backgroundColor: "#ff3f6c",
    borderRadius: "4px",
    padding: "14px",
    fontSize: "14px",
    textTransform: "uppercase",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "#ff3f6c",
    },
  };
  
  const radioButtonSTyle = {
    '&.Mui-checked': {
      color: '#ff3f6c',
    },
  }
  return (
    <div>
      <CheckoutSteps activeStep={0} />
      <Grid container spacing={2} justifyContent="center" sx={{ padding: "2rem"}}>
        {/* SHIPPING ADDRESS SECTION */}
        
        {savedAddresses.length > 0 && (
          <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: '138px',
                marginBottom: '10px',
                width: '734px',
              }}
            >
              <Typography sx={{ marginLeft:'-7px',fontSize: '18px', color: '#282c3f', fontWeight: '700', marginBottom:'4px' }}>
                Select Delivery Address
              </Typography>
              {/* <Button variant="outlined" sx={addressButtonStyle}>
                Add new Address
              </Button> */}
            </Box>
            <Typography sx={{ fontSize: '12px', color: '#535766', fontWeight: '700', marginLeft: '130px', marginBottom:'-8px'}}>
              DEFAULT ADDRESS
            </Typography>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderRadius: "5px",
            paddingRight: "15px",
          }}
        >
          {/*Check if user has address*/}
          <>
          {savedAddresses.length > 0 ? (
            savedAddresses.map((address) => {
              return (
                <Grid
                  key={address.name}
                  container 
                  spacing={1}
                  // onClick={() => setSelectedValue(address.name)} 
                  // className={`address-grid ${selectedValue === address.name ? 'selected' : ''}`}
                  onClick={() => handleSelectAddress(address.contactName)}
                  sx={{
                    // boxShadow: '0px 0px 1px 1.5px rgba(40, 44, 63, .2)'', 
                    boxShadow: selectedValue === address.contactName ? '0 0 4px rgba(40, 44, 63, .2)' : 'none',
                    // border: selectedValue === address.name ? "1px solid #eaeaec" : "1px solid #eaeaec",
                    border:'1px solid #eaeaec',
                    padding:'10px', 
                    paddingBottom:'20px', 
                    borderRadius:'4px', 
                    marginBottom:'25px', 
                    cursor:'pointer',
                  }}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex' }}>
                      <Radio
                        checked={selectedValue === address.contactName}
                        // onChange={handleChange}
                        onChange={() => handleSelectAddress}
                        value={address.contactName}
                        name="radio-buttons"
                        // className={`address-grid ${selectedValue === address.name ? 'selected' : ''}`}
                        sx={{ marginTop: '-10px', marginLeft: '-15px', ...radioButtonSTyle}}
                      />
                      <Typography sx={{ fontSize: '14px', color: '#282c3f', fontWeight: '700' }}>
                        {address.contactName}
                      </Typography>
                      <span>
                        <Button
                          variant="outline"
                          disableElevation
                          disableRipple
                          sx={{
                            color: "#03a685",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            padding:'3px 3px 2px 3px',
                            // backgroundColor: "#F5F5F6",
                            border:'1.3px solid #03A685',
                            borderRadius: "20px",
                            fontSize: "10px",
                            lineHeight: '14px',
                            minWidth: "55px",
                            marginLeft:'10px',
                            "&:hover":{
                              backgroundColor:"#ffffff",
                              border:'1.3px solid #03A685',

                            }
                          }}
                        >
                          {address.contactName}
                        </Button>
                      </span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={savedAddressStyle}>
                      {address.addressLine + " " + address.locality + " " + address.city + " " + address.state}
                    </Typography>
                    <Typography sx={savedAddressStyle}>
                      Mobile: <span style={{ fontWeight: '700' }}>{address.phoneNo}</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={savedAddressStyle}>
                      {address.default ? "Pay on Delivery available" : "Pay on Delivery not available"}
                    </Typography>
                  </Grid>
                  {/* Buttons to edit or remove address */}
                  {selectedValue === address.contactName && (
                    <Grid
                      item
                      xs={12}
                      container
                      spacing={2}
                      sx={{ marginBottom: "0px" }} // Reduced bottom margin
                    >
                      <Grid item>
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            fontSize: '12px',
                            borderRadius: '4px',
                            color: "#282c3f",
                            padding: '6.5px 16px',
                            border: '1px solid #282c3f',
                            marginLeft: '25px',
                            '&:hover': {
                              borderColor: '#282c3f',
                              backgroundColor: '#ffffff',
                            },
                          }}
                        >
                          Remove
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" 
                          sx={{
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            fontSize: '12px',
                            borderRadius: '4px',
                            color: "#282c3f",
                            padding: '6.5px 16px',
                            border: '1px solid #282c3f',
                            '&:hover': {
                              borderColor: '#282c3f',
                              backgroundColor: '#ffffff',
                            },
                          }}
                        >
                          Edit
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                  
                </Grid>
              )
            })
          ) : (
            <>
              <AddressForm />
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={buttonStyle}
                >
                  Add Address
                </Button>
              </Grid>
            </>
          )}
          </>
          {savedAddresses.length > 0 && (
          <Button variant="outlined" sx={addressButtonStyle} onClick={handleOpenDialog} >
            + Add New Address
          </Button>
        )}
          
          {/* Add new address button */}
          {savedAddresses === 0 && (
            <Box mt={2} display="flex" justifyContent="flex-start">
              <Button variant="contained" color="primary" >
                Save Address
              </Button>
            </Box>
          )}
        </Grid>

        {/* PRICE DETAILS SECTION */}
        <Grid item xs={12} md={3.5}>
          <OrderSummary linkTo="/checkout/review" displayButton={true} />
        </Grid>
        <AddressDialog 
          openDialog = {openDialog}
          setOpenDialog = {setOpenDialog}
          handleCloseDialog = {handleCloseDialog}
        />
      </Grid>
    </div>
  );
};

export default OrderAddress;
