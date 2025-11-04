import ChatMessage from './ChatMessage'
import useAutoScroll from './useAutoScroll';
import './ChatMessages.css'

type ChatMessagesProps = {
    chatMessages: {
        id: string;
        message: string;
        sender: 'user' | 'bot';
        time: string | Date;
    }[];
};

function ChatMessages ( { chatMessages } : ChatMessagesProps) {
    const chatMessagesRef = useAutoScroll([chatMessages]);
    
    return (
      <div 
        className="chat-messages-container"
        ref={chatMessagesRef}>
        {chatMessages.map((chatMessages) => {
          return (
            <ChatMessage
              message={chatMessages.message}
              sender={chatMessages.sender}
              time={chatMessages.time}
              key={chatMessages.id}
            />
          );
        })}
      </div>        
    )
  }

export default ChatMessages;