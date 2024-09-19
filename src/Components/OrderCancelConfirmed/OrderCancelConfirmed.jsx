import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import trial_image from "../Assets/product_39.png";

const iconStyle = {
  marginBottom: "-10px",
  marginRight: "20px",
  color: "#03a685",
};
const OrderCancelConfirmed = () => {
  return (
    <Grid xs={12} md={12} sx={{ backgroundColor: "#f5f5f6", padding: "20px" }}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              margin: "30px 0",
            }}
          >
            <CheckCircleIcon
              style={{
                color: "#03a685",
                fontSize: 90,
                width: "100%",
              }}
            />
            <Typography
              sx={{ fontSize: "18px", fontWeight: "bold", color: "#282c3f" }}
            >
              Order Cancelled
            </Typography>
          </Box>
        </Box>
        <Divider/>
        <Box>
          <Typography
            sx={{ fontWeight: "bold", padding: "10px", color: "#282c3f" }}
          >
            1 item is Cancelled
          </Typography>
          <Box
            sx={{ backgroundColor: "#f5f5f6", display: "flex", margin: "10px" }}
          >
            <img
              src={trial_image}
              alt=""
              style={{ width: "50px", padding: "20px" }}
            />
            <Box>
              <Typography
                sx={{
                  color: "#282c3f",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginLeft: "5px",
                }}
              >
                Realme
              </Typography>
              <Typography sx={{ color: "#282c3f", marginLeft: "5px" }}>
                Realme 12x 5g
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ color: "#7e818c", marginTop: "20px", fontSize: "10px" }}
          >
            <CheckCircleOutlineIcon sx={iconStyle} />
            REFUND DETAILS
          </Typography>
          <Typography
            sx={{ color: "#282c3f", marginLeft: "44px", marginBottom: "20px" }}
          >
            A refund is not applicable on this order as it is a pay on delivery
            order
          </Typography>
          <Typography sx={{ color: "#7e818c", fontSize: "10px" }}>
            <CheckCircleOutlineIcon sx={iconStyle} />
            PLEASE NOTE
          </Typography>
          <Typography sx={{ color: "#282c3f", marginLeft: "44px" }}>
            You will recive an email/sms confirming the cancellation of order
            shortly.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "200px",
              width: "100%",
              bgcolor: "#ff3f6c",
              height: "50px",
              "&:hover": {
                backgroundColor: "#ff3f6c",
              },
            }}
          >
            {" "}
            Done
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
export default OrderCancelConfirmed;
