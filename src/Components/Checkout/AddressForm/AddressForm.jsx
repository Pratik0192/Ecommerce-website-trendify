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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  contactName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name should only contain alphabets")
    .required("Name is required"),
  phoneNo: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),
  addressLine: Yup.string()
    .matches(/^[A-Za-z0-9\s,.-]+$/, "Address contains invalid characters")
    .required("Address is required"),
  locality: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Locality should only contain alphabets")
    .required("Locality is required"),
  city: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "City should only contain alphabets")
    .required("City is required"),
  state: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "State should only contain alphabets")
    .required("State is required"),
});


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

  const handleDebouncedChange = debounce((values) => {
    dispatch(userActions.setAddressState(values));
    console.log("Debounced Address data updated:", values);
  }, 600); // 300ms debounce delay

  const handleAddressTypeChange = (addressType) => {
    setAddressState({
      ...addressState,
      type: addressType
    });
    dispatch(userActions.setAddressState({
      ...addressState,
      type: addressType
    }));
  };


  const debouncedSetAddress = debounce((e) => {
    setAddressState({
      ...addressState,
      [e.target.name]: e.target.value
    });
    dispatch(userActions.setAddressState({
      ...addressState,
      [e.target.name]: e.target.value
    }));
  }, 300);

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
    <Formik
      initialValues={{
        contactName: addressState.contactName || "",
        phoneNo: addressState.phoneNo || "",
        pinCode: addressState.pinCode || "",
        addressLine: addressState.addressLine || "",
        locality: addressState.locality || "",
        city: addressState.city || "",
        state: addressState.state || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleDebouncedChange.cancel(); // Cancel debounced updates on submit
        dispatch(userActions.setAddressState(values));
        console.log("Address data submitted:", values);
      }}
      validateOnChange={false} // Prevents real-time validation
      validateOnBlur={true} // Validates on blur
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={detailsHeading}>CONTACT DETAILS</Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                label="Name"
                name="contactName"
                variant="outlined"
                required
                value={values.contactName}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, contactName: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="contactName"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                label="Mobile No"
                name="phoneNo"
                variant="outlined"
                required
                type="tel"
                value={values.phoneNo}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, phoneNo: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="phoneNo"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={detailsHeading}>ADDRESS</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                fullWidth
                label="Pin Code"
                name="pinCode"
                variant="outlined"
                required
                value={values.pinCode}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, pinCode: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="pinCode"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                label="Address (House No, Building, Street, Area)"
                name="addressLine"
                variant="outlined"
                required
                value={values.addressLine}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, addressLine: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="addressLine"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                label="Locality / Town"
                name="locality"
                variant="outlined"
                required
                value={values.locality}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, locality: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="locality"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                fullWidth
                label="City / District"
                name="city"
                variant="outlined"
                required
                value={values.city}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, city: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="city"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                fullWidth
                label="State"
                name="state"
                variant="outlined"
                required
                value={values.state}
                onChange={(e) => {
                  handleChange(e);
                  handleDebouncedChange({ ...values, state: e.target.value });
                }}
                onBlur={handleBlur}
                sx={inputStyle}
              />
              <ErrorMessage
                name="state"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={detailsHeading}>ADDRESS TYPE</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Button
                  variant="outlined"
                  sx={addressButtonStyle}
                  onClick={() => handleAddressTypeChange("Home")}
                  color={addressState.type === "Home" ? "error" : "inherit"}
                >
                  Home
                </Button>
                <Button
                  variant="outlined"
                  sx={addressButtonStyle}
                  onClick={() => handleAddressTypeChange("Work")}
                  color={addressState.type === "Work" ? "error" : "inherit"}
                >
                  Work
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="error"
                    name="isDefault"
                  />
                }
                label="Make this my default address"
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AddressForm;
