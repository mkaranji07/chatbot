import { useState } from 'react'
import  ChatInput  from './components/ChatInput'     
import ChatMessages from './components/ChatMessages'

import './App.css'
      
      function App () {
            // Array Destructuring
        const [chatMessages, setChatMessages] = useState([]);
        // const [chatMessages,setChatMessages] = array;
        // The current data/state value
        // const chatMessages = array[0];
        // updater function
        // const setChatMessages = array[1];
        return (
          <div className="app-container">
            {chatMessages.length === 0 && (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}
            <ChatMessages 
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages} 
              setChatMessages={setChatMessages}
            />
          </div>
        );
      };

export default App
