import React from "react";
import "./Checkout.css";
import { useParams } from "react-router-dom";
import CheckoutSteps from "../../Components/Checkout/CheckoutSteps/CheckoutSteps";
import Shipping from "../OrderAddress/OrderAddress";
import ReviewOrder from "../Components/Checkout/OrderReview/OrderReview";
import Payment from "../Components/Checkout/OrderPayment/OrderPayment";


const Checkout = (props) => {
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
          <p>404 Not Found</p>
        }
      </div>
    </div>
  )
}

export default Checkout;