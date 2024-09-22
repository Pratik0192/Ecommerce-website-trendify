import React, { useState } from "react";
import { Grid, Button, Typography, Box, Link } from "@mui/material";
import AddressDialog from "../Checkout/AddressDialog/AddressDialog"; 
import AddressEmptyPlaceholder from "./AddressEmptyPlaceholder";

const savedAddresses = [
  {
    id: 1,
    name: "Sayantan Sardar",
    mobile: "8207208709",
    pincode:"743247",
    address: "Kanchdaha",
    localityTown:"Charghat",
    cityDistrict:"Alipore",
    state:"West Bengal",
    type: "Office",
    isDefault: true,
  },
  {
    id: 2,
    name: "Sayantan Sardar",
    mobile: "8207208709",
    pincode:"743247",
    address: "Kanchdaha",
    localityTown:"Charghat",
    cityDistrict:"Alipore",
    state:"West Bengal",
    type: "Office",
    isDefault: false,
  },
];

const ProfileAddress = () => {
  const defaultAddress = savedAddresses.find((address) => address.isDefault);
  const [selectedValue, setSelectedValue] = useState(defaultAddress?.id || savedAddresses[0]?.id);
  const [openDialog, setOpenDialog] = useState(false);
  const [addresses, setAddresses] = useState(savedAddresses);

  const handleSetDefault = (index) => {
    const updatedAddresses = addresses.map((address, i) => ({
      ...address,
      isDefault: i === index, 
    }));
    setAddresses(updatedAddresses);
  };

  const handleSelectAddress = (id) => {
    console.log("Selected Name:", id);
    setSelectedValue(id);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return addresses && addresses.length > 0 ? (
    <Box
      sx={{
        padding: "2rem",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "-100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "-22px",
          marginTop: "-20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}
        >
          Saved Addresses
        </Typography>

        <Button
          variant="outlined"
          sx={{
            textTransform: "uppercase",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#526cd0",
            border: "0.5px solid #d4d5d9",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              border: "0.5px solid #d4d5d9",
            },
          }}
          onClick={handleOpenDialog}
        >
          + Add New Address
        </Button>
      </Box>

      <Box sx={{ marginLeft: "-15px", marginTop:'15px', }}>
        {addresses.map((address, index) => (
          <Grid
            container
            key={index}
            spacing={1}
            // onClick={() => setSelectedValue(address.id)} // Handle grid click to select address
            onClick={() => handleSelectAddress(address.id)}
            sx={{
              boxShadow:'0 1px 2px 1px rgb(212, 213, 217 , 0.5)',
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              "&:hover":{
                boxShadow: "0px 3px 9px 3px rgba(212, 213, 217, 0.5)",
              }
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#696E79", fontWeight: "700" }}
                >
                  {address.name}
                </Typography>
              </Box>

              <Box sx={{ paddingRight: "10px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#696E79",
                    fontWeight: "760",
                    textTransform: "uppercase",
                    paddingLeft: "10px",
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    backgroundColor: "#F5F5F6",
                    borderRadius: "10px",
                    fontSize: "11px",
                    width: "50px",
                  }}
                >
                  {address.type}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="body2"
                sx={{ color: "#696E79", marginLeft: "3px" }}
              >
                {address.address}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#696E79", marginLeft: "3px" }}
              >
                {address.localityTown}
              </Typography>
              <Typography
                variant="body2"
                sx={{color: "#696E79", marginLeft: "3px" }}
              >
                {address.cityDistrict} -
                <span> {address.pincode}</span>
              </Typography>
            </Grid>

            {selectedValue === address.id && (
              <>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    sx={{color: "#696E79", marginLeft: "3px", marginTop:"-6px", marginBottom:'9px'}}
                  >
                    {address.state}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{color: "#696E79", marginLeft: "3px", marginBottom:'2px' }}
                  >
                    Mobile: {address.mobile}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginLeft: "3px" }}>
                  {address.isDefault ? (
                    <Typography
                      variant="body2"
                      sx={{
                        textTransform: "uppercase",
                        color: "#14CDA8",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Default Address
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{
                        textTransform: "uppercase",
                        color: "#14CDA8",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                      onClick={() => handleSetDefault(index)}
                    >
                      Make This Default
                    </Typography>
                  )}
                </Grid>

                <Grid
                  item
                  container
                  justifyContent="center"
                  spacing={2}
                  md={16}
                  sx={{
                    marginTop: "6px",
                    marginLeft: "-11px",
                    marginRight: "-11px",
                    marginBottom: "-6px",
                    borderTop: "1px solid #d4d5d9",
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    sx={{
                      marginLeft: "-18px",
                      marginBottom: "2px",
                      marginTop: "-4px",
                    }}
                  >
                    <Link to="/">
                      <Button
                        disableRipple
                        disableElevation
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "white",
                          color: "#526cd0",
                          fontWeight: "bold",
                          fontSize: "14px",
                          textTransform: "uppercase",
                          borderRadius: "0px",
                          marginTop: "-8px",
                          borderRight: "1px solid #d4d5d9",
                          height: "35px",
                          "&:hover": {
                            backgroundColor: "#FFFFFF",
                          },
                        }}
                      >
                        Edit
                      </Button>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ marginBottom: "2px", marginTop: "-4px"}}
                  >
                    <Button
                      disableRipple
                      disableElevation
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "white",
                        color: "#526cd0",
                        fontWeight: "bold",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        marginTop: "-8px",
                        marginBottom: "2px",
                        height: "35px",
                        "&:hover": {
                          backgroundColor: "#FFFFFF",
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        ))}
      </Box>
      <AddressDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} />
    </Box>
  ) : (
    <AddressEmptyPlaceholder/>
  );
};

export default ProfileAddress;
