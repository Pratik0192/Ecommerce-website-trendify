class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Greeting method
  greet() {
    const message = this.createChatBotMessage("Hello! How can I assist you today?");
    this.addMessageToState(message);
  }

  // Order-related methods
  handleOrderStatus() {
    const message = this.createChatBotMessage("You can track your order status in your account under 'Orders'.");
    this.addMessageToState(message);
  }

  handleOrderCancellation() {
    const message = this.createChatBotMessage("To cancel your order, please visit the 'Orders' section.");
    this.addMessageToState(message);
  }

  handleOrderModification() {
    const message = this.createChatBotMessage("You can modify your order within 1 hour of placing it.");
    this.addMessageToState(message);
  }

  handleOrderConfirmation() {
    const message = this.createChatBotMessage("You should receive an order confirmation email shortly.");
    this.addMessageToState(message);
  }

  // Shipping-related methods
  handleShippingInfo() {
    const message = this.createChatBotMessage("Shipping details can be found in the shipping section of your account.");
    this.addMessageToState(message);
  }

  handleShippingDelay() {
    const message = this.createChatBotMessage("We apologize for any delays. Please check your tracking information.");
    this.addMessageToState(message);
  }

  handleShippingCost() {
    const message = this.createChatBotMessage("Shipping costs vary based on your location and the weight of your order.");
    this.addMessageToState(message);
  }

  handleShippingCountries() {
    const message = this.createChatBotMessage("We ship to several countries worldwide. Check our shipping policy for details.");
    this.addMessageToState(message);
  }

  // Product-related methods
  handleProductAvailability() {
    const message = this.createChatBotMessage("You can check product availability on the product page.");
    this.addMessageToState(message);
  }

  handleOutOfStock() {
    const message = this.createChatBotMessage("If an item is out of stock, you can sign up for restock notifications.");
    this.addMessageToState(message);
  }

  handleSizeChart() {
    const message = this.createChatBotMessage("You can find the size chart on the product detail page.");
    this.addMessageToState(message);
  }

  handleProductInquiry() {
    const message = this.createChatBotMessage("Please specify which product you are inquiring about.");
    this.addMessageToState(message);
  }

  // Payment-related methods
  handlePaymentIssue() {
    const message = this.createChatBotMessage("Please contact our support for assistance with payment issues.");
    this.addMessageToState(message);
  }

  handlePaymentOptions() {
    const message = this.createChatBotMessage("We accept various payment methods, including credit/debit cards and PayPal.");
    this.addMessageToState(message);
  }

  handlePaymentFailed() {
    const message = this.createChatBotMessage("If your payment failed, please check your payment details or try again.");
    this.addMessageToState(message);
  }

  handleCODInquiry() {
    const message = this.createChatBotMessage("Cash on delivery is available for select locations. Check during checkout.");
    this.addMessageToState(message);
  }

  // Return and refund-related methods
  handleReturnProcess() {
    const message = this.createChatBotMessage("You can initiate a return through your order history page.");
    this.addMessageToState(message);
  }

  handleRefundStatus() {
    const message = this.createChatBotMessage("Refund status can be checked in your account under the 'Refunds' section.");
    this.addMessageToState(message);
  }

  handleExchangeProcess() {
    const message = this.createChatBotMessage("To exchange an item, please follow the instructions in your account.");
    this.addMessageToState(message);
  }

  // Discounts and offers methods
  handleDiscountInquiry() {
    const message = this.createChatBotMessage("We have various discounts and offers available; check our website for details.");
    this.addMessageToState(message);
  }

  handlePromoCode() {
    const message = this.createChatBotMessage("To apply a promo code, enter it during checkout.");
    this.addMessageToState(message);
  }

  // Miscellaneous methods
  handleGiftCardInquiry() {
    const message = this.createChatBotMessage("You can purchase and redeem gift cards on our website.");
    this.addMessageToState(message);
  }

  handleMembershipInquiry() {
    const message = this.createChatBotMessage("Our loyalty program offers various benefits. Check our website for details.");
    this.addMessageToState(message);
  }

  handleHolidaySales() {
    const message = this.createChatBotMessage("Stay tuned for our holiday sales; they're announced on our homepage.");
    this.addMessageToState(message);
  }

  handleOrderHistory() {
    const message = this.createChatBotMessage("You can view your order history in your account.");
    this.addMessageToState(message);
  }

  handleNewsletterSubscription() {
    const message = this.createChatBotMessage("You can subscribe to our newsletter for the latest updates.");
    this.addMessageToState(message);
  }

  handleLostPackage() {
    const message = this.createChatBotMessage("If your package is lost, please contact our customer support for help.");
    this.addMessageToState(message);
  }

  handleInvoiceRequest() {
    const message = this.createChatBotMessage("You can request an invoice via our customer support.");
    this.addMessageToState(message);
  }

  handleCustomerServiceContact() {
    const message = this.createChatBotMessage("You can contact customer service via our support page.");
    this.addMessageToState(message);
  }

  // General help method
  handleGeneralHelp() {
    const message = this.createChatBotMessage("How can I help you today? You can ask me anything!");
    this.addMessageToState(message);
  }

  // Feedback and inquiries
  handleFeedback() {
    const message = this.createChatBotMessage("We appreciate your feedback! Please share your thoughts.");
    this.addMessageToState(message);
  }

  handleBulkOrderInquiry() {
    const message = this.createChatBotMessage("For bulk orders, please contact our sales team.");
    this.addMessageToState(message);
  }

  handleStoreLocations() {
    const message = this.createChatBotMessage("You can find our store locations on the website.");
    this.addMessageToState(message);
  }

  handleSafetyInformation() {
    const message = this.createChatBotMessage("We prioritize your safety with secure payment options.");
    this.addMessageToState(message);
  }

  handleLoyaltyProgram() {
    const message = this.createChatBotMessage("Join our loyalty program for exclusive rewards.");
    this.addMessageToState(message);
  }

  handleSupportHours() {
    const message = this.createChatBotMessage("Our customer service hours are 9 AM to 5 PM, Monday to Friday.");
    this.addMessageToState(message);
  }

  handleRestockNotification() {
    const message = this.createChatBotMessage("You can sign up for restock notifications on the product page.");
    this.addMessageToState(message);
  }

  handleSurveysAndFeedback() {
    const message = this.createChatBotMessage("We value your input! Please participate in our surveys.");
    this.addMessageToState(message);
  }

  handleSpecialPromotions() {
    const message = this.createChatBotMessage("Stay tuned for our special promotions announced on our website!");
    this.addMessageToState(message);
  }

  // Method to add messages to the state
  addMessageToState(message) {
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
