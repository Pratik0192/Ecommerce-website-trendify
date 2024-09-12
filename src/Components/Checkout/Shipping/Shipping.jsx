import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, Box, Radio} from "@mui/material";
import ShippingAmount from "../../ShippingAmount/ShippingAmount";
import ShippingAddress from "../../ShippingAddress/ShippingAddress";
import AddressDialog from "../../AddressDialog/AddressDialog";


const savedAddressesObj = [
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
    type: "Home 2",
    address: "1/1A, Godrej Prakriti, Kolkata, West Bengal - 700030",
    mobile: "7595029561",
    codAvailable: false,
  }
];

const Shipping = () => {
  // const [hasAddress, setHasAddress] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const [savedAddresses, setSavedAddresses] = useState(savedAddressesObj);

  useEffect(() => {
    if(savedAddresses.length > 0){
      setSelectedValue(savedAddresses[0].name);
    }
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // const handleAddNewAddress = () => {
  //   setHasAddress(true);
  // };

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
    border: '1px solid #d4d5d9',
    marginTop:'15px',
    '&:hover': {
      borderColor: '#d4d5d9',
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

  return (
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
            <Typography sx={{ fontSize: '18px', color: '#282c3f', fontWeight: '700' }}>
              Select Delivery Address
            </Typography>
            {/* <Button variant="outlined" sx={addressButtonStyle}>
              Add new Address
            </Button> */}
          </Box>
          <Typography sx={{ fontSize: '12px', color: '#535766', fontWeight: '700', marginLeft: '138px' }}>
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
          savedAddresses.map((address, i) => {
            return (
              <Grid container spacing={1} sx={{boxShadow: '0px 2px 5px rgba(212, 213, 217, 0.5) ', padding:'10px', paddingBottom:'20px', borderRadius:'4px', marginBottom:'25px', cursor:'pointer'}}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex' }}>
                    <Radio
                      checked={selectedValue === address.name}
                      onChange={handleChange}
                      value={address.name}
                      name="radio-buttons"
                      sx={{ marginTop: '-10px', marginLeft: '-15px' }}
                    />
                    <Typography sx={{ fontSize: '14px', color: '#282c3f', fontWeight: '700' }}>
                      {address.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={savedAddressStyle}>{address.address}</Typography>
                  <Typography sx={savedAddressStyle}>
                    Mobile: <span style={{ fontWeight: '700' }}>{address.mobile}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={savedAddressStyle}>
                    {address.codAvailable ? "Pay on Delivery available" : "Pay on Delivery not available"}
                  </Typography>
                </Grid>
                {/* Buttons to edit or remove address */}
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
              </Grid>
            )
          })
        ) : (
          <>
          <ShippingAddress />
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
          +Add New Address
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
        <ShippingAmount />
      </Grid>
      <AddressDialog 
        openDialog = {openDialog}
        setOpenDialog = {setOpenDialog}
        handleCloseDialog = {handleCloseDialog}
      />
    </Grid>
  );
};

export default Shipping;
