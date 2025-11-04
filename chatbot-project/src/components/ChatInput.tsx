import { useState, type JSX } from 'react'
import LoadingSpinner from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs';
import './ChatInput.css'

type ChatMessages = {
  message: string | JSX.Element;
  sender: string;
  id: string;
}[];

type ChatInputProps = {
  chatMessages: ChatMessages;
  setChatMessages: (chatMessages: ChatMessages) => void;
};

function ChatInput( { chatMessages, setChatMessages } : ChatInputProps) {
    const [inputText, setInputText] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);

    type InputEvent = {
      target: {
        value: string;
      };
    };

    function saveInputText (event: InputEvent) {
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
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
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
          sender: 'bot',
          id: crypto.randomUUID(),
        }
      ]);

      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessages,
      {
        message: response,
        sender: 'bot',
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
      }
      ]);
      setIsLoading(false);
    }
    
    
    type KeyDownEvent = {
      key: string;
    };
    
    function handleKeyDown(event:KeyDownEvent) {
      if (event.key === 'Enter') {
        sendMessage();
      } else if (event.key === 'Escape') {
        setInputText('');
      }
    }

    function clearMessages() {
    setChatMessages([]);

    // Here, you could also run:
    // localStorage.setItem('messages', JSON.stringify([]));

    // However, because chatMessages is being updated, the
    // useEffect in the App component will run, and it will
    // automatically update messages in localStorage to be [].
  }

    return (
      // React fragments let you group a list of children without adding extra nodes to the DOM
      <div className="chat-input-container">
        <input 
          type="text" 
          placeholder="Send a message to Chatbot"
          size={30}
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
        <button
          onClick={clearMessages}
          className="clear-btn"
        >
          Clear
        </button>
      </div>
    );
}

export default ChatInput;