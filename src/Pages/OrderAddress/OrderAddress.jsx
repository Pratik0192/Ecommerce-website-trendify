import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, Box, Radio } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import OrderSummary from "../../Components/Checkout/OrderSummary/OrderSummary";
import AddressForm from "../../Components/Checkout/AddressForm/AddressForm";
import AddressDialog from "../../Components/Checkout/AddressDialog/AddressDialog";
import CheckoutSteps from "../../Components/Checkout/CheckoutSteps/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { 
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from "../../store/userSlice";



const OrderAddress = (props) => {
  const emptyAddress = {
    contactName: "",
    phoneNo: "",
    pinCode: "",
    addressLine: "",
    locality: "",
    city: "",
    state: "",
    type: ""
  };
  const dispatch = useDispatch();
  const { hideNavbar } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const userData = useSelector((store) => store.user.userData);
  const loading = useSelector((store) => store.user.loading)
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [addressToBePassed, setAddressToBePassed] = useState(emptyAddress);
  const token = useSelector((store) => store.user.token);
  const addressState = useSelector((store) => store.user.address);


  useEffect(() => {
    hideNavbar();
  }, [hideNavbar]);


  useEffect(() => {
    if(userData){
      setSavedAddresses(userData.address);
      if(userData.address.length > 0){
        setSelectedValue(userData.address[0]._id);
      }
    }
  }, [userData]);



  const handleSelectAddress = (id) => {
    console.log("Selected Address:", id);
    setSelectedValue(id);
  };

  const handleOpenDialog = (address) => {
    setAddressToBePassed(address);
    setOpenDialog(true);
  };

  const handleCloseDialog = (address) => {
    setOpenDialog(false);
  };

  const handleSubmitAddress = () => {
    const paramObj = {
      token: token,
      payload: addressState
    }
    //console.log("CreateAddress: ", paramObj)
    dispatch(createUserAddress(paramObj));
    setOpenDialog(false);
  }

  const handleUpdateAddress = (addressId) => {
    const paramObj = {
      token: token,
      addressId,
      payload: addressState
    }
    //console.log("UpdateAddress: ", paramObj);
    dispatch(updateUserAddress(paramObj));
    setOpenDialog(false);
  }

  const handleDeleteAddress = (addressId) => {
    const paramObj = { addressId, token };
    dispatch(deleteUserAddress(paramObj));
  }

  const getAddressLine = (address) => {
    const line = address.addressLine + ", " + address.locality + ", " + address.city + ", " + address.state;
    return line;
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
    display: "flex",
    justifyContent: "flex-start",
    textTransform: 'uppercase',
    marginLeft:'-8px',
    width:'101%',
    borderRadius: '4px',
    padding:'18px 20px',
    border: '1px dashed #d4d5d9',
    marginTop:'15px',
    '&:hover': {
      border: '1px dashed #d4d5d9',
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
  };

  const addressTypeStyle = {
    color: "#03a685",
    fontWeight: "700",
    textTransform: "uppercase",
    padding:'3px 3px 2px 3px',
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
  };

  const editButtonStyle = {
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
  }

  const removeButtonStyle = {
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
  };

  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
                    key={address._id}
                    container 
                    spacing={1}
                    // onClick={() => setSelectedValue(address.name)} 
                    // className={`address-grid ${selectedValue === address.name ? 'selected' : ''}`}
                    onClick={() => handleSelectAddress(address._id)}
                    sx={{
                      // boxShadow: '0px 0px 1px 1.5px rgba(40, 44, 63, .2)'', 
                      boxShadow: selectedValue === address._id ? '0 0 4px rgba(40, 44, 63, .2)' : 'none',
                      // border: selectedValue === address._id ? "1px solid #eaeaec" : "1px solid #eaeaec",
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
                          checked={selectedValue === address._id}
                          onChange={() => handleSelectAddress(address._id)}
                          value={address._id}
                          name="radio-buttons"
                          // className={`address-grid ${selectedValue === address._id ? 'selected' : ''}`}
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
                            sx={addressTypeStyle}
                          >
                            {address.type}
                          </Button>
                        </span>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={savedAddressStyle}>
                        {getAddressLine(address)}
                      </Typography>
                      <Typography sx={savedAddressStyle}>
                        Mobile: <span style={{ fontWeight: '700' }}>{address.phoneNo}</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={savedAddressStyle}>
                        Pay on Delivery available
                      </Typography>
                    </Grid>
                    {/* Buttons to edit or remove address */}
                    {selectedValue === address._id && (
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
                            sx={editButtonStyle}
                            onClick={() => handleOpenDialog(address)}
                          >
                            Edit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button 
                            variant="outlined" 
                            sx={removeButtonStyle}
                            onClick={() => handleDeleteAddress(address._id)}
                          >
                            Remove
                          </Button>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                )
              })
            ) : (
              <>
                <AddressForm
                  address={emptyAddress}
                />
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={buttonStyle}
                    onClick={handleSubmitAddress}
                  >
                    Add Address
                  </Button>
                </Grid>
              </>
            )}
            </>
            {savedAddresses.length > 0 && (
              <Button 
                variant="outlined" 
                sx={addressButtonStyle} 
                onClick={() => handleOpenDialog(emptyAddress)}
              >
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
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            handleSubmitAddress={handleSubmitAddress}
            handleUpdateAddress={handleUpdateAddress}
            address={addressToBePassed}
          />
        </Grid>
      </div>
    </div>
  );
};

export default OrderAddress;
