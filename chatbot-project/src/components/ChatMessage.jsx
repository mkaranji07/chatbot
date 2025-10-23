import BotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

function ChatMessage ({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // Destructuring assignment | Shortcut for above 2 lines
        // const { message, sender } = props;
        /*
        if (sender === 'bot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */
        


        return (
          <div className= {sender === 'user' 
              ? 'chat-message-user' 
              : 'chat-message-bot'
          }>
              {sender === 'bot' ? (
                <img 
                  src={BotProfileImage} 
                  className="chat-message-profile"
                />
            ) : null}
            <div 
              className="chat-message-text">
              {message}
            </div>
              {sender === 'user' ? (
                <img  
                  src={UserProfileImage}
                  className="chat-message-profile"
                />
            ) : null}
          </div>
        );
      }

      export default ChatMessage;