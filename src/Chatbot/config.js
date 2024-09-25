import { createChatBotMessage } from "react-chatbot-kit";

const botName = "TrendiCare";

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hi! I'm ${botName}. How can i help you today?`)
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376b7e',
        },
        chatButton: {
            backgroundColor: '#5ccc9d'
        },
    },
};

export default config;