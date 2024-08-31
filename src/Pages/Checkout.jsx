import React from "react";
import { useParams, Link } from "react-router-dom";
import CheckoutSteps from "../Components/Checkout/CheckoutSteps/CheckoutSteps";
import Shipping from "../Components/Checkout/Shipping/Shipping";
import ConfirmOrder from "../Components/Checkout/ConfirmOrder/ConfirmOrder";
import "./CSS/Checkout.css";

const Checkout = (props) => {
  //const { section } = props;
  const param = useParams();

  return (
    <div className="checkout-page-container">
      <div className="checkout-steps-box">
        <CheckoutSteps />
      </div>
      <div className="checkout-page-content">
        {
          param.section === "shipping" ? <Shipping /> : 
          param.section === "confirm" ? <ConfirmOrder /> : 
          param.section === "payment" ? <p>This is Payment</p> :
          <p>404 Not Found</p>
        }
      </div>
    </div>
  )
}

export default Checkout;