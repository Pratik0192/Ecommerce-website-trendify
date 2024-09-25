class ActionProvider {
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
    }
    greet() {
        const message = this.createChatBotMessage("Hello! How can i help you today?");
        this.updateChatbotState(message);
    }

    handleHelp(){
        const message = this.createChatBotMessage("I can help you with order tracking, product details, and more.");
        this.updateChatbotState(message);
    }
    updateChatbotState(message) {
        this.setStateFunc((prev) => ({
            ...prev, 
            messages : [...prev.messages, message],
        }));
    }
}

export default ActionProvider;