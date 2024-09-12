import React, { Fragment, useContext, useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import "./ReviewOrder.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ShopContext } from "../../../Context/ShopContext";
import { useNavigate } from "react-router-dom";


const ConfirmOrder = ({ history }) => {
  //const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  //const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { getShippingAddress } = useContext(ShopContext);
  const [shippingInfo, setShippingInfo] = useState({});
  const [address, setAddress] = useState("");
  const [subtotal, setSubTotal] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

    console.log(getShippingAddress());
    setShippingInfo(getShippingAddress());

    //setSubTotal(getTotalCartAmount());

    setShippingCharges(subtotal > 1000 ? 0 : 200);

    setTax(subtotal * 0.18);

    setTotalPrice(subtotal + tax + shippingCharges);

    const addressLine = 
    `${shippingInfo.address}, 
    ${shippingInfo.city}, 
    ${shippingInfo.state}, 
    ${shippingInfo.pinCode}, 
    ${shippingInfo.country}`;
    
    setAddress(addressLine);

  }, []);  

  

  const proceedToPayment = () => {
    console.log("Proceed To Payment");
    //sessionStorage.setItem("orderInfo", JSON.stringify(data));
    //history.push("/process/payment");
    navigate("/checkout/payment");
  };

  return (
    <Fragment>
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>User Name</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {/* {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))} */}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>
            
            <button onClick={() => proceedToPayment()}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;