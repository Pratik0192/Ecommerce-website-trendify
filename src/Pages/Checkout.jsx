import React from "react";
import { useParams, Link } from "react-router-dom";
import CheckoutSteps from "../Components/Checkout/CheckoutSteps/CheckoutSteps";
import Shipping from "../Components/Checkout/Shipping/Shipping";
import ReviewOrder from "../Components/Checkout/ReviewOrder/ReviewOrder";
import Payment from "../Components/Checkout/Payment/Payment";
import "./CSS/Checkout.css";
import OrderConfirmed from "../Components/Checkout/OrderConfirmed/OrderConfirmed"


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
          param.section === "review" ? <ReviewOrder /> : 
          param.section === "payment" ? <Payment /> :
          param.section === "orderconfirm" ? <OrderConfirmed /> :
          <p>404 Not Found</p>
        }
      </div>
    </div>
  )
}

export default Checkout;