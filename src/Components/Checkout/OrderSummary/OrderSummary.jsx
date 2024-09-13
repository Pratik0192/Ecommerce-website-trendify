import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const priceDetailStyle = {
  fontSize: "12px",
  color: "#535766",
  fontWeight: "700",
  textTransform: "uppercase",
};

const priceSubHeadings = {
  fontSize: "14px",
  color: "#424553",
};

const styleFree = {
  fontSize: "14px",
  color: "#03a685",
};

const totalStyle = {
  fontSize: "15px",
  color: "#3e4152",
  fontWeight: "700",
};

const knowmoreStyle = {
  fontSize: "14px",
  color: "#ff3f6c",
  fontWeight: "700",
};

const OrderSummary = (props) => {
  const { linkTo, displayButton } = props;
  const priceDetails = useSelector((store) => store.cart.priceDetails);

  return (
    <div>
      <Box sx={{ padding: 2, border: "1px solid #eaeaec", borderRadius: 2 }}>
        <Typography sx={priceDetailStyle}>PRICE DETAILS (1 Item)</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography sx={priceSubHeadings}>Total MRP</Typography>
          <Typography sx={{ color: "#424553", fontSize: "14px" }}>
            ₹{priceDetails.totalMrp}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography sx={priceSubHeadings}>Discount on MRP</Typography>
          <Typography sx={{ color: "#03a685", fontSize: "14px" }}>
            -₹{priceDetails.totalDiscount}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography sx={priceSubHeadings}>
            Platform Fee
            <span style={knowmoreStyle}> Know More</span>
          </Typography>
          <Typography sx={styleFree}>FREE</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography sx={priceSubHeadings}>
            Shipping Fee
            <span style={knowmoreStyle}> Know More</span>
          </Typography>
          <Typography sx={styleFree}>FREE</Typography>
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#686b79" }}>
          Free shipping for you
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
            borderTop: "1px solid #eaeaec",
            paddingTop: 2,
          }}
        >
          <Typography sx={totalStyle}>Total Amount</Typography>
          <Typography sx={totalStyle}>₹{priceDetails.totalAmount}</Typography>
        </Box>
        <Link to={linkTo}>
          {displayButton && <Button
            variant="contained"
            sx={{
              width: "100%",
              color: "#fff",
              backgroundColor: "#ff3f6c",
              borderRadius: "2px",
              padding: "10px",
              textTransform: "uppercase",
              border: "1px solid #ff3f6c",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "#ff3f6c",
                border: "1px solid #ff3f6c",
              },
            }}
          >
            continue
          </Button>}
        </Link>
      </Box>
    </div>
  );
};

export default OrderSummary;
