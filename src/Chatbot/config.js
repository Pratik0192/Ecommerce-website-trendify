import { createChatBotMessage } from "react-chatbot-kit";

const botName = "TrendiCare";

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hi! I'm ${botName}. How can i help you today?`)
    ],
    customStyles: {
        botMessageBox: {
          backgroundColor: '#0d47a1',
        },
        chatButton: {
            backgroundColor: '#ff3f6c',
        },
    },
};

export default config;