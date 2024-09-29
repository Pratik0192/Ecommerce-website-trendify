// import { createChatBotMessage } from "react-chatbot-kit";

// const botName = "TrendiCare";

// const config = {
//     botName: botName,
//     initialMessages: [
//         createChatBotMessage(`Hi! I'm ${botName}. How can i help you today?`)
//     ],
//     customStyles: {
//         botMessageBox: {
//           backgroundColor: '#0d47a1',
//         },
//         chatButton: {
//             backgroundColor: '#ff3f6c',
//         },
//     },
// };

// export default config;

import { createChatBotMessage } from "react-chatbot-kit";
// import './';  // Import your custom styles
import './custom.css';

const botName = "TrendiCare";

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hi! I'm ${botName}. How can I help you today?`)
    ],
    customStyles: {
        botMessageBox: {
          backgroundColor: '#ff3f6c ',
        },
        chatButton: {
            backgroundColor: '#ff3f6c',
        },
    },
};

export default config;
