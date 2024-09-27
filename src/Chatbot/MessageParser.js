class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Greeting
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      this.actionProvider.greet();
    }

    // Order-related inquiries
    if (lowerCaseMessage.includes("order status") || lowerCaseMessage.includes("track order")) {
      this.actionProvider.handleOrderStatus();
    }

    if (lowerCaseMessage.includes("cancel order")) {
      this.actionProvider.handleOrderCancellation();
    }

    if (lowerCaseMessage.includes("modify order") || lowerCaseMessage.includes("change order")) {
      this.actionProvider.handleOrderModification();
    }

    if (lowerCaseMessage.includes("order confirmation")) {
      this.actionProvider.handleOrderConfirmation();
    }

    // Shipping-related inquiries
    if (lowerCaseMessage.includes("shipping") || lowerCaseMessage.includes("delivery")) {
      this.actionProvider.handleShippingInfo();
    }

    if (lowerCaseMessage.includes("delay") || lowerCaseMessage.includes("delayed ")) {
      this.actionProvider.handleShippingDelay();
    }

    if (lowerCaseMessage.includes("cost") || lowerCaseMessage.includes("delivery charges")) {
      this.actionProvider.handleShippingCost();
    }

    if (lowerCaseMessage.includes("countries you ship to") || lowerCaseMessage.includes("international shipping")) {
      this.actionProvider.handleShippingCountries();
    }

    // Product-related inquiries
    if (lowerCaseMessage.includes("product availability") || lowerCaseMessage.includes("item available")) {
      this.actionProvider.handleProductAvailability();
    }

    if (lowerCaseMessage.includes("out of stock")) {
      this.actionProvider.handleOutOfStock();
    }

    if (lowerCaseMessage.includes("size chart") || lowerCaseMessage.includes("sizing info")) {
      this.actionProvider.handleSizeChart();
    }

    if (lowerCaseMessage.includes("product") || lowerCaseMessage.includes("item details")) {
      this.actionProvider.handleProductInquiry();
    }

    // Payment-related inquiries
    if (lowerCaseMessage.includes("payment issue") || lowerCaseMessage.includes("payment problem")) {
      this.actionProvider.handlePaymentIssue();
    }

    if (lowerCaseMessage.includes("payment methods") || lowerCaseMessage.includes("accepted payment")) {
      this.actionProvider.handlePaymentOptions();
    }

    if (lowerCaseMessage.includes("payment failed")) {
      this.actionProvider.handlePaymentFailed();
    }

    if (lowerCaseMessage.includes("cod available") || lowerCaseMessage.includes("cash on delivery")) {
      this.actionProvider.handleCODInquiry();
    }

    // Return and refund-related inquiries
    if (lowerCaseMessage.includes("return process") || lowerCaseMessage.includes("return item")) {
      this.actionProvider.handleReturnProcess();
    }

    if (lowerCaseMessage.includes("refund status") || lowerCaseMessage.includes("check refund")) {
      this.actionProvider.handleRefundStatus();
    }

    if (lowerCaseMessage.includes("exchange item") || lowerCaseMessage.includes("exchange process")) {
      this.actionProvider.handleExchangeProcess();
    }

    // Discounts and offers inquiries
    if (lowerCaseMessage.includes("discount") || lowerCaseMessage.includes("offers") || lowerCaseMessage.includes("sale")) {
      this.actionProvider.handleDiscountInquiry();
    }

    if (lowerCaseMessage.includes("promo code") || lowerCaseMessage.includes("apply code")) {
      this.actionProvider.handlePromoCode();
    }

    // Miscellaneous inquiries
    if (lowerCaseMessage.includes("gift card") || lowerCaseMessage.includes("redeem card")) {
      this.actionProvider.handleGiftCardInquiry();
    }

    if (lowerCaseMessage.includes("membership") || lowerCaseMessage.includes("loyalty program")) {
      this.actionProvider.handleMembershipInquiry();
    }

    if (lowerCaseMessage.includes("holiday sale") || lowerCaseMessage.includes("special sale")) {
      this.actionProvider.handleHolidaySales();
    }

    if (lowerCaseMessage.includes("order history")) {
      this.actionProvider.handleOrderHistory();
    }

    if (lowerCaseMessage.includes("subscribe newsletter") || lowerCaseMessage.includes("get updates")) {
      this.actionProvider.handleNewsletterSubscription();
    }

    if (lowerCaseMessage.includes("lost package") || lowerCaseMessage.includes("missing package")) {
      this.actionProvider.handleLostPackage();
    }

    if (lowerCaseMessage.includes("invoice request") || lowerCaseMessage.includes("request invoice")) {
      this.actionProvider.handleInvoiceRequest();
    }

    if (lowerCaseMessage.includes("contact customer service") || lowerCaseMessage.includes("customer support")) {
      this.actionProvider.handleCustomerServiceContact();
    }

    // General help
    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.handleGeneralHelp();
    }

    // New inquiries added for broader coverage
    if (lowerCaseMessage.includes("customer feedback") || lowerCaseMessage.includes("share feedback")) {
      this.actionProvider.handleFeedback();
    }

    if (lowerCaseMessage.includes("bulk order") || lowerCaseMessage.includes("wholesale")) {
      this.actionProvider.handleBulkOrderInquiry();
    }

    if (lowerCaseMessage.includes("local store") || lowerCaseMessage.includes("store location")) {
      this.actionProvider.handleStoreLocations();
    }

    if (lowerCaseMessage.includes("safety") || lowerCaseMessage.includes("secure payment")) {
      this.actionProvider.handleSafetyInformation();
    }

    if (lowerCaseMessage.includes("join loyalty program") || lowerCaseMessage.includes("reward points")) {
      this.actionProvider.handleLoyaltyProgram();
    }

    if (lowerCaseMessage.includes("customer service hours") || lowerCaseMessage.includes("support hours")) {
      this.actionProvider.handleSupportHours();
    }

    if (lowerCaseMessage.includes("back in stock") || lowerCaseMessage.includes("restock notification")) {
      this.actionProvider.handleRestockNotification();
    }

    if (lowerCaseMessage.includes("surveys") || lowerCaseMessage.includes("participate in survey")) {
      this.actionProvider.handleSurveysAndFeedback();
    }

    if (lowerCaseMessage.includes("special promotions") || lowerCaseMessage.includes("exclusive offers")) {
      this.actionProvider.handleSpecialPromotions();
    }

    // If none of the inquiries match
    this.actionProvider.createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
  }
}

export default MessageParser;
