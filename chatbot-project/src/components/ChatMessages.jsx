import ChatMessage from './ChatMessage'
import useAutoScroll from './useAutoScroll';
import './ChatMessages.css'

function ChatMessages ( { chatMessages } ) {
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
              key={chatMessages.id}
            />
          );
        })}
      </div>        
    )
  }

export default ChatMessages;