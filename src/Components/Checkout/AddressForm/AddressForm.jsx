import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { userActions } from "../../../store/userSlice";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";


const detailsHeading = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#282c3f",
  padding: "16px 16px 0",
  marginLeft: "-14px",
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d4d5d9",
    },
    "&:hover fieldset": {
      borderColor: "#282c3f",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#282c3f",
    },
  },
  "& .MuiInputBase-input": {
    color: "#282c3f",
    fontSize: "14px",
    fontWeight: "300",
    padding: "12px",
    height: "unset",
  },
  "& .MuiInputLabel-root": {
    top: "50%",
    transform: "translate(0, -50%) scale(1)",
    fontSize: "13px",
    paddingLeft: "18px",
    color: "#94969f",
    transition: "transform 0.4s ease, top 0.4s ease",
    "&.Mui-focused, &.MuiFormLabel-filled": {
      top: "0",
      transform: "translate(0, -35%) scale(0.90)",
      color: "#282c3f",
    },
  },
};

const addressButtonStyle = {
  marginRight: "10px",
  borderRadius: "20px",
  fontSize: "12px",
  padding: "4px 16px",
  color: "#282c3f",
  border: "1px solid #282c3f",
  "&:hover": {
    border: "1px solid #ff3f6c",
    color: "#ff3f6c",
    backgroundColor: "#ffffff",
  },
  "&:active": {
    border: "1px solid #ff3f6c",
    color: "#ff3f6c",
    backgroundColor: "#ffffff",
  },
};


const AddressForm = ({ address }) => {
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
  const [addressState, setAddressState] = useState(emptyAddress);


  useEffect(() => {
    if(address._id !== undefined){
      const { _id, default: isDef, ...restAddress } = address;
      setAddressState(restAddress);
      dispatch(userActions.setAddressState(restAddress));
    }
    else {
      dispatch(userActions.setAddressState(emptyAddress));
    }
  }, []);


  const debouncedSetAddress = debounce((e) => {
    setAddressState({
      ...addressState,
      [e.target.name]: e.target.value
    });
    dispatch(userActions.setAddressState({
      ...addressState,
      [e.target.name]: e.target.value
    }));
  }, 600);

  const setAddressValue = (e) => {
    debouncedSetAddress(e);
  }

  const setAddressType = (addressType) => {
    setAddressState({
      ...addressState,
      type: addressType
    });
    dispatch(userActions.setAddressState({
      ...addressState,
      type: addressType
    }));
  }

  const getRequiredValue = (value) => {
    return address !== undefined ? address[value] : ""
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography sx={detailsHeading}>CONTACT DETAILS</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          name="contactName"
          variant="outlined"
          required
          defaultValue={getRequiredValue("contactName")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Mobile No"
          name="phoneNo"
          variant="outlined"
          required
          type="tel"
          defaultValue={getRequiredValue("phoneNo")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={detailsHeading}>ADDRESS</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Pin Code"
          name="pinCode"
          variant="outlined"
          required
          defaultValue={getRequiredValue("pinCode")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address (House No, Building, Street, Area)"
          name="addressLine"
          variant="outlined"
          required
          defaultValue={getRequiredValue("addressLine")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Locality / Town"
          name="locality"
          variant="outlined"
          required
          defaultValue={getRequiredValue("locality")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="City / District"
          name="city"
          variant="outlined"
          required
          defaultValue={getRequiredValue("city")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="State"
          name="state"
          variant="outlined"
          required
          defaultValue={getRequiredValue("state")}
          onChange={setAddressValue}
          sx={inputStyle}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={detailsHeading}>SAVE ADDRESS AS</Typography>
        <Box sx={{ display: "flex", marginTop: "12px" }}>
          <Button variant="outlined"
            sx={addressButtonStyle}
            onClick={() => setAddressType("Home")}
          >
            HOME
          </Button>
          <Button variant="outlined" 
            sx={addressButtonStyle}
            onClick={() => setAddressType("Office")}
          >
            WORK
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox />}
          label="Make this my default address"
        />
      </Grid>
    </Grid>
  );
};

export default AddressForm;
