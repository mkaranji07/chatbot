import { useState } from 'react'
import LoadingSpinner from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

function ChatInput( { chatMessages, setChatMessages } ) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText (event) {
      setInputText(event.target.value);
    }

    async function sendMessage(){
        if (isLoading || inputText === '') {
        return;
      }
      // Set isLoading to true at the start, and set it to false after everything is done.

      setIsLoading(true);
      setInputText('');
      
      const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
      ];

      setChatMessages(newChatMessages);

        setChatMessages([
        ...newChatMessages,
        // This creates a temporary Loading... message.
        // Because we don't save this message in newChatMessages,
        // it will be remove later, when we add the response.
        {
          message: <img src={LoadingSpinner} className="loading-spinner" />,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);

      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessages,
      {
        message: response,
        sender: 'bot',
        id: crypto.randomUUID()
      }
      ]);
      setIsLoading(false);
    }
    
    
    
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        sendMessage();
      } else if (event.key === 'Escape') {
        setInputText('');
      }
    }

    return (
      // React fragments let you group a list of children without adding extra nodes to the DOM
      <div className="chat-input-container">
        <input 
          type="text" 
          placeholder="Send a message to Chatbot"
          size="30"
          onChange={saveInputText}
          value={inputText}
          onKeyDown={handleKeyDown}
          className="chat-input"
        />
        <button 
          onClick={sendMessage}
          className="send-btn"
        >
          Send
        </button>
      </div>
    );
}

export default ChatInput;